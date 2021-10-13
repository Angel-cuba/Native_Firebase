import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'



const CustomListItem = ({ id, chatName, enterChat }) => {

                         console.log(id)
     return (
          <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
               <Avatar 
               rounded
               source= {{ 
                    uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
               }}
               />
               <ListItem.Content>
                    <ListItem.Title style={{ textAlign: "center", fontWeight: "800" }}>
                         {chatName}
                    </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                         This is a subtitled message..😆

                    </ListItem.Subtitle>
               </ListItem.Content>
          </ListItem>
     )
}

export default CustomListItem


const styles = StyleSheet.create({})
