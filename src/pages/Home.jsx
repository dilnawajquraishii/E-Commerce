import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const Home = () => {
  let ctx = useContext(CartContext)
  // console.log(ctx)
  const [items, setItems] = useState([]);
  const [searchItem, setsearchItem] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  let recordsperPage = 15;
  let lastIndex = currentPage * recordsperPage;
  let firstIndex = lastIndex - recordsperPage;
  let noOfPages = Math.ceil(items.length / recordsperPage)
  let buttonArray = [...Array(noOfPages + 1).keys()].slice(1);
  // console.log(buttonArray)
  // console.log(sliceItem)


  let filteredItem = searchItem.filter((ele) => ele.title.toLowerCase().includes(ctx.Navsearch))

  let sliceItem = filteredItem.slice(firstIndex, lastIndex)



  const [categories, setcategories] = useState(["All", "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"]);


  // console.log(ctx.Navsearch)

  // console.log(filteredItem)

  async function fetchData() {
    let res = await axios.get('https://dummyjson.com/products?posts?skip=0&limit=100');

    setItems(res.data.products);
    setsearchItem(res.data.products)
  }
  // console.log(items)


  useEffect(() => {
    fetchData()
  }, [])

  const handleAddtoCart = (ans) => {

    // console.log(ans)
    let obj = {
      ...ans,
      quantity: 1
    }
    console.log(obj)
    ctx.addtoCart(obj)
  }

  const handleLiClick = (ans) => {
    console.log(ans)

    if (ans !== 'All') {
      let filteredProducts = items.filter((ele) => ele.category.toLowerCase() === ans)
      console.log(filteredProducts)

      setsearchItem(filteredProducts)
    }
    else {
      setsearchItem(items)
    }

  }

  const handleNext = () => {

    if (currentPage < noOfPages) {
      setcurrentPage(currentPage + 1)

    }



  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1)
    }



  }
  return (
    <div className='row ' style={{background:'white'}}>
      <div className="col-2 bg-warning category">
        <h3 className='mt-3 ' style={{marginLeft:'50px',fontWeight:'bold',color:'maroon'}}>Categories</h3>
        <ul class="list-group">
          {categories.map((ele) => {
            return <li key={ele.id} onClick={() => handleLiClick(ele)} class="list-group-item Li">{ele}</li>
          })}

        </ul>
      </div>
      <div className="col-lg-10">
        <div className="row row-cols-3 d-flex justify-content-center">
          {sliceItem.map((ele) => {
            return <div key={ele.id} className="card m-2" style={{ width: '16rem',border:'4px solid red',borderRadius:'15px' }}>
              <img style={{ height: "200px",borderRadius:'20px',marginTop:'10px' }} src={ele.thumbnail}
                className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-truncate" style={{fontWeight:'bold',color:'maroon'}}>{ele.title}</h5>
                <p className="card-text"style={{fontWeight:'bold',color:'maroon'}}>Price:{ele.price}</p>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to="#" className="btn btn-primary" style={{fontWeight:'bold'}} onClick={() => handleAddtoCart(ele)}>Add to Cart</Link>
              </div>
            </div>

          })}
        </div>
        <div className='text-center d-flex justify-content-center'>
          <nav aria-label="Page navigation example m-auto">
            <ul class="pagination">
              <li onClick={handlePrev} class="page-item"><a class="page-link" href="#">Previous</a></li>
              
              {buttonArray.map((ele) => {
                return <li onClick={() => setcurrentPage(ele)} class="page-item"><a class="page-link" href="#">{ele}</a></li>
              })}

              <li onClick={handleNext} class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  )
}



export default Home
