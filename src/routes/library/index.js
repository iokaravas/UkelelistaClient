import React from 'react'
import Item from '../../components/library/item'

const library = () => {
    // Get from API stuff ;)
    const songs = [
        {
            name: 'ena-chrisopsaro-sti-giala',
            title: 'Ένα χρυσόψαρο μέσα στη γυάλα',
            thumbnail: '',
            base :'D#'
        },
        {
            name: 'ti-mas-les',
            thumbnail: '',
            title: 'Τι μας λες',
            base :'C#'
        }
    ]
    return (<div className="container col-mb-4">
        <div className="row songs_row">

            {songs.map((song,index)=> {
                return (<div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <Item {...song} />
                </div>)
            })}

        </div>
    </div>)
}

export default library