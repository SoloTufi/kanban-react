import React from 'react';

import { Column, Id } from '../types';
import ColumnCont from './ColumnCont';
import PlusIcon from './PlusIcon';

const KanbanBoard: React.FC = () => {
	const [columns, setColumns] = React.useState<Column[]>([]);

	return (
		<div className='m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-40 justify-center'>
			<div className='m-auto flex gap-4'>
				<div className='flex gap-4'>
					{columns.map(col => (
						<ColumnCont key={col.id} column={col} deleteColumn={deleteColumn} />
					))}
				</div>
				<button
					onClick={() => {
						createNewColumn();
					}}
					className=' h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2 flex gap-2'
				>
					<PlusIcon /> Add Column
				</button>
			</div>
		</div>
	);

	function createNewColumn() {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		};
		setColumns([...columns, columnToAdd]);
	}

	function deleteColumn(id: Id) {
		const filteredColumns = columns.filter(obj => obj.id !== id);
		setColumns(filteredColumns);
	}
};

function generateId() {
	//Generate a rundon number between 0 and 10000
	return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
