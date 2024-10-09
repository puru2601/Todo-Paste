// import React from 'react'
import { useState } from "react";
import Center from "./components/Center";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "./redux/boardsSlice";
import EmptyBoard from "./components/EmptyBoard";

const App = () => {
	const dispatch = useDispatch();
	const boards = useSelector((state) => state.boards);
	const activeBoard = boards.find((board) => board.isActive);
	if (!activeBoard && boards.length > 0)
		dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));

	const [isboardModalOpen, setIsBoardModalOpen] = useState(false);

	return (
		<div className="overflow-hidden overflow-x-scroll">
			<>
				{boards.length > 0 ? (
					<>
						{/* Header Section*/}

						<Header
						setIsBoardModalOpen={setIsBoardModalOpen}
							isboardModalOpen={isboardModalOpen}
						/>

						{/* center Section*/}

						<Center
						setIsBoardModalOpen={setIsBoardModalOpen}
							isboardModalOpen={isboardModalOpen}
						/>
					</>
				) : (
					<>
						<EmptyBoard type="add" />
					</>
				)}
			</>
		</div>
	);
};

export default App;
