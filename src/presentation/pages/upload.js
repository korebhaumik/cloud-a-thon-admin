import { React, useState } from "react";

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
  return (
    <div>
      <form className="upload-container" onSubmit={handleSubmit}>
        <div className="upload-left">
          <div className="input-wrapper">
            <input type="file" />
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

          {/* <button type="submit">Upload</button> */}
          <div className="div-right">{/* <h1>Hello world</h1> */}</div>
        </div>
        <div className="upload-right">
          <div className="upload-unit">
            <h1>Book Name</h1>
            <input placeholder="Eg: The End Of The World" />
          </div>
          <div className="upload-unit">
            <h1>Book Author</h1>
            <input placeholder="Eg: H G Wells" />
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
      </form>
    </div>
  );
}
