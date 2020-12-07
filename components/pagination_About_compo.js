import {Pagination as Pagi,Figure,Row} from 'react-bootstrap'
import { List_Images} from '../components/list_images'
import { Children, useState } from "react";
//import Pagination from "react-js-pagination";

const PaginatedContent = () =>
{
    // Data to be rendered using pagination.
    const todos = List_Images.map(lt=>(

        <Figure id="figabt" >
            <Figure.Image

                src={lt.url}
            />

        </Figure>
    ));
    const todosPerPage = 3;
    const [activePage, setCurrentPage] = useState(1);

    // Logic for displaying current todos
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) =>
    {
        return <li key={index}>{todo}</li>;
    });

    const handlePageChange = (pageNumber) =>
    {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };

    return (
        <div>
            <Row>{renderTodos}</Row>
            
                
            <Row >
                <Pagi id="abt_pagination">
                    

                    <Pagi.First onClick={() => setCurrentPage(1)}/>
                    <Pagi.Prev onClick={() => {
                        if(activePage==1)
                        setCurrentPage(1)
                    else{setCurrentPage(activePage-1)}
                    }}/>
                    <Pagi.Item
                        onClick={(active) => setCurrentPage(1)}
                    >{1}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(2)}
                    >{2}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(3)}
                    >{3}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(4)}>{4}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(5)}>{5}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(6)}>{6}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(7)}>{7}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(8)}>{8}</Pagi.Item>
                    <Pagi.Item
                        onClick={() => setCurrentPage(9)}>{9}</Pagi.Item>             
                    <Pagi.Item
                        onClick={() => setCurrentPage(10)}>{10}</Pagi.Item>
                    <Pagi.Item onClick={() => setCurrentPage(11)}>{11}</Pagi.Item> 
                    <Pagi.Item onClick={() => setCurrentPage(12)}>{12}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(13)}>{13}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(14)}>{14}</Pagi.Item> 
                    <Pagi.Item onClick={() => setCurrentPage(15)}>{15}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(16)}>{16}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(17)}>{17}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(18)}>{18}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(19)}>{19}</Pagi.Item>  
                    <Pagi.Item onClick={() => setCurrentPage(20)}>{20}</Pagi.Item> 
                    <Pagi.Item onClick={() => setCurrentPage(21)}>{21}</Pagi.Item>    

                        
                        
                    <Pagi.Next onClick={() => setCurrentPage(activePage+1)} />
                    <Pagi.Last onClick={() => setCurrentPage(21)} />
                    
                </Pagi>
            </Row>
        </div>
    )

}

export default PaginatedContent;


// <Pagination
//     activePage={activePage}
//     itemsCountPerPage={3}
//     totalItemsCount={todos.length}
//     pageRangeDisplayed={3}
//     onChange={handlePageChange}
// />
