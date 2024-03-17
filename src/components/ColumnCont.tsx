import { Column, Id } from '../types';
import DeleteIcon from './DeleteIcon';

interface IProps {
	column: Column;
	deleteColumn: (id: Id) => void;
}

const ColumnCont = (props: IProps) => {
	const { column, deleteColumn } = props;

	return (
		<div className='bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col'>
			{/*Column title*/}
			<div className='bg-mainBackgroundColor flex items-center justify-between text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBackgroundColor border-4'>
				<div className='flex gap-2'>
					<span className='flex justify-center items-center bg-columnBackgroundColor px-2 py-1 text-sm rounded-full'>
						0
					</span>
					<h2>{column.title}</h2>
				</div>
				<button onClick={() => deleteColumn(column.id)}>
					<DeleteIcon />
				</button>
			</div>

			{/*Column task container*/}
			<div className='flex flex-grow'>Content</div>

			{/* Column footer */}
			<div className=''>Footer</div>
		</div>
	);
};

export default ColumnCont;
