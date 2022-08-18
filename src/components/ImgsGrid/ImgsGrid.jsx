import React, {useState, useEffect} from "react";
import ImgsGridImgs from "./ImgsGridImgs";




function ImgsGrid({status, imgs, tagsActive}) {

  const [filterMode, setFilterMode] = useState([]);

  function getTags(array) {
    let arrayToReturn = []
  
    // grab all tags in one array
    array.forEach(
      (el) => {
        arrayToReturn = [ ...arrayToReturn, ...el.tags ]
      }
    )
  
    // delete the duplicates and return them
    return [ ...new Set(arrayToReturn) ]
  }


  function Tag({tag, toggled, style}) {
  
    function handleClick(e) {

      if (tag === "< Deselect all >") {
        setFilterMode([])


      } else if (!toggled) {
        // if not toggled push a tag to filterMode
        setFilterMode([...filterMode, tag])

      } else {
        // del the tag from filterMode
        let newFilterMode = filterMode.concat()
        newFilterMode.splice(filterMode.indexOf(tag), 1)
        setFilterMode(newFilterMode)
      }
    }

    return (
      <button className={toggled ? '__tag _toggled' : '__tag'}
      onClick={(e) => {handleClick(e)}} style={style}>{tag}</button>
    )
  }


  // when user will quit sort by tags mode
  useEffect(() => {
    return () => {
      setFilterMode([])
    }
  }, [tagsActive])

  /* IMGS GRID COMPONENT ITSELF */
  return (
    <>
      <div className='imgs-grid-gap'/>
      <div className='imgs-grid'>

        { tagsActive &&
          <div className='imgs-grid-tags-area'>

            <Tag tag={"< Deselect all >"} key={"< Deselect all >"} style={{fontFamily: "Arvo BoldItalic"}}/>
            {getTags(imgs).map(
              tag => <Tag tag={tag} key={tag}
              toggled={filterMode.includes(tag)}/*<-- will return true or false*/ />
            )}

          </div>
        }

        <ImgsGridImgs status={status} imgs={imgs} filterMode={filterMode} />
  
      </div>
    </>
  )
}




export default ImgsGrid