import React from 'react'
import Item from '../../components/library/item'

const library = () => {
    // Get from API stuff ;)
    const songs = [
        {
            name: 'ena-chrisopsaro-sti-giala',
            title: 'Ένα χρυσόψαρο μέσα στη γυάλα',
            base :'D#'
        }
    ]
    return (<div className="container col-mb-4">
        <div className="row songs_row">

            {songs.map((song,index)=> {
                let title = song.title
                return (<div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <Item title />
                </div>)
            })}

        </div>
    </div>)
}

export default library