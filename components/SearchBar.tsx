"use client"

import { useState } from "react"
import {SearchManufacurer} from "."

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');

  const onSubmit = () => {
    // e.preventDefault();
  }

  const onSetManufacturer = () => {

  }

  return (
    <form className='searchbar' onSubmit={onSubmit}>
      <div className="serchbar__item">
        <SearchManufacurer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  )
}
