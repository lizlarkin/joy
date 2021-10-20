import React, { useState, useEffect } from 'react';
import axios from "axios";

const Blog = () => {

    const blogStyles = {
        memCard: {
            marginTop: "3%"
        },
        background: {
            backgroundImage: "url('https://media.istockphoto.com/videos/grey-abstract-technology-minimal-motion-background-video-id1001591664?b=1&k=20&m=1001591664&s=640x640&h=I_ehTa6dCqHLok4IEy3kFGhYL-BM7Y5ci0Dq1tpAkME=')",
            // backgroundImage: "url('https://img.freepik.com/free-vector/pink-organic-shape-background_53876-97811.jpg?size=626&ext=jpg')",
            // backgroundImage: "url('https://images.unsplash.com/photo-1567304441104-d7a7d3e4bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3Vuc2V0JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
        }
    }

    const [helpReload, setHelpReload] = useState(0);

      // reset form function
    const clearForm = () => {
        document.querySelector('input[id="input-one"]').value = "";
        document.querySelector('input[id="input-two"]').value = "";
        document.querySelector('textarea[id="input-three"]').value = "";
        setMemory({
            name: "",
            location: "",
            text: ""
        });
    };

    const [memory, setMemory] = useState({
        name: "",
        location: "",
        text: ""
    });

    const storeData = (e) => {
        setMemory({...memory, [e.target.name]: e.target.value})
    }

    const submitMemory = async e => {
        e.preventDefault();
        // Require all fields
        if (memory.name==="") {
          alert("Please add name")
        } else if (memory.location==="") {
            alert("Please add location")
        } else if (memory.text==="") {
            alert("Please add memory")
        } else {
          try {
            const postMemory = await axios.post(
              `/blog`, memory
            );
            setHelpReload(helpReload + 1);
          } catch (err) {
            console.log(err.response);
          }
        }
      };

      const [memoryData, setMemoryData] = useState();

      const getMemoryData = async () => {
        try {
          const findAllMemories = await axios.get(`/blog`);
          setMemoryData(findAllMemories.data)
          console.log(findAllMemories.data)
        } catch (err) {
          console.log(err.response);
        }
      };
  
      useEffect(() => {
        getMemoryData();
      }, [helpReload])

    return (
        <div style={blogStyles.background}>
            <div className="row">
                <h1 className="heading">Moment of Joy</h1>
                <h3 className="subheading">Please share you favorite memory of Joy with the family.</h3> 
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <input onChange={storeData} type="text" className="form-control" placeholder="Name(s)" name="name" id="input-one"/>
                    </div>
                    <div className="mb-3">
                        <input onChange={storeData} type="text" className="form-control" placeholder="City, State" name="location" id="input-two"/>
                    </div>
                    <div className="mb-3">
                        <textarea onChange={storeData} className="form-control" rows="6" placeholder="Story" name="text" id="input-three"></textarea>
                    </div>
                    <button onClick={submitMemory} type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Share Memory</button>
                </div>
                <div className="col-md-4"></div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Thank you!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        We love and appreciate your support. <br />
                        - Brown, McConnell, and Townsend family. 
                    </div>
                    <div className="modal-footer">
                        <button onClick={clearForm} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">

                {memoryData?
                    memoryData.map ((data, index) => (
                <div className="card" style={blogStyles.memCard}>
                    {/* <div class="card-header">
                        Add something here?
                    </div> */}
                        <div className="card-body" key={index}>
                            <blockquote class="blockquote mb-0">
                            <p>{data.text}</p>
                            <footer className="blockquote-footer">{data.name}, <cite title="Source Title">{data.location}</cite></footer>
                            </blockquote>
                    </div>
                    </div>
                    )):null}
                </div>

                
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Blog
