import React, {useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';



const PersonListItem = (props) => {
  //console.log(props.person.films.length)
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return(
    <>
      <ListItem button onClick={()=>clickHandler()}>
        <ListItemText primary={`${props.person.name}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <ListItemText primary={`gender: ${props.person.gender}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Height: ${props.person.height}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Mass: ${props.person.mass}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Homeworld: ${props.person.homeworld}`}/>
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </>
  )
}

export default PersonListItem