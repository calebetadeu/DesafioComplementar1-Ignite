import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/ApiContexts";
import { api } from "../services/api";
import { Button } from "./Button";


export function SideBar() {

const {genres,handleClickButton,selectedGenreId}=useContext(MovieContext)

  

return (

 <>
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  </>

        
)
}