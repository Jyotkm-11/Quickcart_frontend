import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext';
import { useNavigate } from "react-router-dom";

const Featuredcat = () => {
  const { cart, products, filtereddata, setFiltereddata } = useContext(AppContext);
  const navigate = useNavigate();

  const filterByCat = (cat) => {
    setFiltereddata(products.filter((data) => data.category.toLowerCase() === cat.toLowerCase()));
    navigate(`/category/${cat}`);
  }
  const categoryCount = products.reduce((acc, product) => {
  const cat = product.category;
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
}, []);

  return (
    <>
      <div className="container my-5" style={{ maxWidth: '100%' }}>
        {/* Section Header */}
        <div className="d-flex justify-content-between align-items-center mb-3 ms-0">
          <h3 className=" fs-2 ">Featured Categories</h3>
          <div className="d-flex gap-4 ms-5 me-auto fs-5">
            <a style={{ textDecoration: "none" }} className='text-dark' onClick={() => filterByCat("Cake & Milk")}>Cake & Milk</a>
            <a style={{ textDecoration: "none" }} className='text-dark' onClick={() => filterByCat("Flours & Grains")}>Flours & Grains</a>
            <a style={{ textDecoration: "none" }} className='text-dark' onClick={() => filterByCat("Pet Foods")}>Pet Foods</a>
            <a style={{ textDecoration: "none" }} className='text-dark' onClick={() => filterByCat("Fresh from Nature")}>Fresh from Nature</a>
          </div>
        </div>

        {/* Horizontal Scroll with Cards */}
        <div className="position-relative">
          <div
            className="d-flex overflow-auto pb-3"
            style={{ gap: "15px", scrollSnapType: "x mandatory" }}
          >
            {[
              { title: "Cake & Milk", bg: "#e9f7e7", img: "https://png.pngtree.com/element_our/20190603/ourmid/pngtree-birthday-cake-cartoon-illustration-image_1436380.jpg" },
              { title: "Icecream", bg: "#fff5e9", img: "https://png.pngtree.com/png-vector/20210721/ourmid/pngtree-delicious-ice-cream-cone-cartoon-png-image_3618103.jpg" },
              { title: "Flours & Grains", bg: "#ffeceb", img: "https://png.pngtree.com/png-vector/20210224/ourmid/pngtree-wheat-flour-clip-art-png-image_2942182.jpg" },
              { title: "Organic Kiwi",  bg: "#e9f7e7", img: "https://png.pngtree.com/png-clipart/20220327/original/pngtree-kiwi-cartoon-design-png-image_7471619.png" },
              { title: "Peach",  bg: "#fff5e9", img: "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-fruit-peach-cartoon-illustration-image_1424931.jpg" },
              { title: "Read Apple", bg: "#ffeceb", img: "https://gimgs2.nohat.cc/thumb/f/640/smiley-red-apple-illustration-apple-fruit-apple-cartoon-transparent-background-png-clipart--comhiclipartdfbka.jpg" },
              { title: "Snacks", bg: "#e9f7e7", img: "https://png.pngtree.com/png-clipart/20190117/ourmid/pngtree-delicious-snacks-beautiful-snack-hand-painted-snacks-cartoon-snack-png-image_412624.jpg" },
              { title: "Vegetables",  bg: "#fff0f7", img: "https://img.freepik.com/premium-psd/funny-cartoon-vegetable-isolated-transparent-background-png_1073071-9227.jpg" },
              { title: "Strawberry", bg: "#e9f7e7", img: "https://png.pngtree.com/png-vector/20220220/ourmid/pngtree-buah-strawberry-cartoon-vector-png-image_4393717.png" },
              { title: "Black plum", bg: "#ffeceb", img: "https://png.pngtree.com/png-clipart/20220626/original/pngtree-black-plum-png-image_8188625.png" },
              { title: "Custard apple", bg: "#e9f7e7", img: "https://img.freepik.com/premium-psd/3d-custard-apple-transparent-background_838900-27085.jpg" },
              { title: "Coffe & Tea", bg: "#ffeceb", img: "https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2021%2F09%2FCartoon-hand-drawn-coffee-logo-on-transparent-background-PNG.png&w=3840&q=75" },
            ].map((category, index) => (
              <div
                key={index}
                className="p-3 text-center rounded-4"
                style={{
                  backgroundColor: category.bg,
                  minWidth: "130px",
                  flex: "0 0 auto",
                  scrollSnapAlign: "start",
                  cursor: "pointer"
                }}
                onClick={() => filterByCat(category.title)}
              >
                <img
                  src={category.img}
                  alt={category.title}
                  style={{ height: "70px", objectFit: "contain", marginLeft: "15px" }}
                  className="mb-2"
                />
                <h6 className="fw-semibold">{category.title}</h6>
                <p className="text-muted small">{categoryCount[category.title] || 0} items</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Cards */}
      <div className='row ms-4 me-4 gap-4'>
        <div className='col-3' style={{
          backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center", height: "300px", width: "470px", borderRadius: "30px"
        }}>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-4'>
              <h2 className='fs-3' style={{ width: "260px", marginTop: "65px" }} >Everyday Fresh & Clean with Our Products</h2>
              <button className='btn btn-success mt-4'  onClick={() => filterByCat("Rice & Grains")}> Shop Now </button>
            </div>
            <div className='col-4'></div>
          </div>
        </div>
        <div className='col-3' style={{
          backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-2.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center", height: "300px", width: "470px", borderRadius: "30px"
        }}>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-4'>
              <h2 className='fs-3' style={{ width: "260px", marginTop: "65px" }}>Make Your Breakfast Healthy & Easy</h2>
              <button className='btn btn-success mt-4' onClick={() => filterByCat("Rice & Grains")}> Shop Now </button>
            </div>
            <div className='col-4'></div>
          </div>
        </div>
        <div className='col-3' style={{
          backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-3.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center", height: "300px", width: "470px", borderRadius: "30px"
        }}>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-4'>
              <h2 className='fs-3' style={{ width: "260px", marginTop: "65px" }}>The Best Organic Products Online</h2>
              <button className='btn btn-success mt-4' onClick={() => filterByCat("Rice & Grains")}> Shop Now </button>
            </div>
            <div className='col-4'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featuredcat;
