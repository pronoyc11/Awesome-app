import React from 'react'
import ListItem from '../listItem/ListItem'
import { FlatList } from 'react-native'

const Placelist = (props) => {
  return (
    <FlatList 
    data={props.placeList}
    renderItem={(info)=>{
      return (
        <ListItem key={info.item.key} item={info.item.item} itemKey={info.item.key} handleSelectedPlace={props.handleSelectedPlace} />
      )
    }}
    />
  )
}

export default Placelist