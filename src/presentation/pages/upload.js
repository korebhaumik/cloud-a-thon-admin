import { React, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

const notify = (param) => {
  if (param == 1) {
    toast.success('posted book succesfully');
  }
  else if (param == 2) {
    // do something for loading
  }
  else {
    toast.error('some error occured');
  }
}

export default function Upload() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [formData, setformData] = useState({
    name: "",
    author: "",
    genre: {
      finance: false,
      fantasy: false,
      adventure: false,
      fiction: false,
      philosophy: false,
      cooking: false,
      scifi: false,
      mystery: false,
      horror: false,
      romance: false,
      historical: false,
      educational: false,
    },
  });

  //write this in the cloud function for firebase
  function test() {
    let arraygenre = []
    Object.keys(formData.genre).forEach(function (key, index) {
      if (formData.genre[key]) {
        arraygenre.push(key)
      }
    });
    console.log(arraygenre)
  }

  // sending to function write on firestore
  function send2() {
    console.log("in send 2")
    try {
      // fetch("https://us-central1-cloud-a-thon.cloudfunctions.net/firenode/api/create", {
      fetch("http://127.0.0.1:5001/cloud-a-thon/us-central1/firenode/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          notify(1)
        })

    }
    catch {
      notify(0)
    }
  }

  // sending to function to store on bucket
  function send1() {
    console.log("in send 1")

    try {
      let inputElem = document.getElementById("imgfile")
      let file = inputElem.files[0]

      console.log(`https://storage.googleapis.com/finalbucket-cloudathon/${formData.name}_image.png`)
      // this will be the url in firestore url param
      // https://storage.googleapis.com/finalbucket-cloudathon/${formData.name}_image.png

      // below is the code for renaming the file
      let blob = file.slice(0, file.size, "image/*") //MIME type
      let newFile = new File([blob], `${formData.name}_image.png`, { type: "image/*" })
      let inputData = new FormData()
      inputData.append("imgfile", newFile)
      console.log(inputData)
      // http://localhost:8080/
      // https://docker-storage-1-d7fxidgsxa-uc.a.run.app
      fetch("https://docker-storage-1-d7fxidgsxa-uc.a.run.app/uploadimg", {
        method: "POST",
        body: inputData
      })
        .then((res) => {
          send2()
        })
    }
    catch {
      notify(0)
    }


  }



  return (
    <div>
      <Toaster />
      <form className="upload-container" onSubmit={handleSubmit}>
        <div className="upload-left">
          <div className="input-wrapper">
            <input type="file" id="imgfile" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <p>Upload Image</p>
            <h4>Files supported png, jpg, jpeg.</h4>
          </div>
          <div className="div-right">{/* <h1>Hello world</h1> */}</div>
        </div>
        <div className="upload-right">
          <div className="upload-unit">
            <h1>Book Name</h1>
            <input placeholder="Eg: The End Of The World"
              onChange={(e) => {
                setformData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="upload-unit">
            <h1>Book Author</h1>
            <input placeholder="Eg: H G Wells"
              onChange={(e) => {
                setformData((prev) => {
                  return {
                    ...prev,
                    author: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="upload-genre">
            <h1>Select Genre: </h1>
            <div className="genre-checkbox">
              <div className="genre-checkbox-left">
                <input
                  type="checkbox"
                  id="finance"
                  name="finance"
                  value="finance"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, finance: !prev.genre.finance },
                      };
                    });
                  }}
                />
                <label htmlFor="finance">Finance</label>
                <br />
                <input
                  type="checkbox"
                  id="fantasy"
                  name="fantasy"
                  value="fantasy"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, fantasy: !prev.genre.fantasy },
                      };
                    });
                  }}
                />
                <label htmlFor="fantasy">Fantasy</label>
                <br />
                <input
                  type="checkbox"
                  id="adventure"
                  name="adventure"
                  value="adventure"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: {
                          ...prev.genre,
                          adventure: !prev.genre.adventure,
                        },
                      };
                    });
                  }}
                />
                <label htmlFor="adventure">Adventure</label>
                <br />
                <input
                  type="checkbox"
                  id="fiction"
                  name="fiction"
                  value="fiction"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, fiction: !prev.genre.fiction },
                      };
                    });
                  }}
                />
                <label htmlFor="fiction">Fiction</label>
                <br />
                <input
                  type="checkbox"
                  id="philipsophy"
                  name="philipsophy"
                  value="philipsophy"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: {
                          ...prev.genre,
                          philosophy: !prev.genre.philosophy,
                        },
                      };
                    });
                  }}
                />
                <label htmlFor="philipsophy">Philipsophy</label>
                <br />
                <input
                  type="checkbox"
                  id="cooking"
                  name="cooking"
                  value="cooking"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, cooking: !prev.genre.cooking },
                      };
                    });
                  }}
                />
                <label htmlFor="cooking">Cooking</label>
                <br />
              </div>
              <div className="genre-checkbox-right">
                <input
                  type="checkbox"
                  id="scifi"
                  name="scifi"
                  value="scifi"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, scifi: !prev.genre.scifi },
                      };
                    });
                  }}
                />
                <label htmlFor="scifi">Sci-Fi</label>
                <br />
                <input
                  type="checkbox"
                  id="mystery"
                  name="mystery"
                  value="mystery"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, mystery: !prev.genre.mystery },
                      };
                    });
                  }}
                />
                <label htmlFor="mystery">Mystery</label>
                <br />
                <input
                  type="checkbox"
                  id="horror"
                  name="horror"
                  value="horror"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, horror: !prev.genre.horror },
                      };
                    });
                  }}
                />
                <label htmlFor="horror">Horror</label>
                <br />
                <input
                  type="checkbox"
                  id="romance"
                  name="romance"
                  value="romance"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: { ...prev.genre, romance: !prev.genre.romance },
                      };
                    });
                  }}
                />
                <label htmlFor="romance">Romance</label>
                <br />
                <input
                  type="checkbox"
                  id="historical"
                  name="historical"
                  value="historical"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: {
                          ...prev.genre,
                          historical: !prev.genre.historical,
                        },
                      };
                    });
                  }}
                />
                <label htmlFor="historical">Historical</label>
                <br />
                <input
                  type="checkbox"
                  id="educational"
                  name="educational"
                  value="educational"
                  onChange={(e) => {
                    setformData((prev) => {
                      return {
                        ...prev,
                        genre: {
                          ...prev.genre,
                          educational: !prev.genre.educational,
                        },
                      };
                    });
                  }}
                />
                <label htmlFor="educational">Educational</label>
                <br />
              </div>
            </div>
          </div>
        </div>
        <motion.button
          type="submit"
          className="form-button"
          onClick={send1}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.15 },
            backgroundColor: "#0CAD28",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Upload
        </motion.button>
      </form>
    </div>
  );
}
