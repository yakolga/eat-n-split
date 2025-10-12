import Button from "./Button"
import { useState } from "react";

export default function FormAddFriend({onSubmit}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/');

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !image) return

        const newFriend = {id: Date.now(), name: name, image: image, balance: 0};
        onSubmit(newFriend);
        
        setName('');
        setImage('https://i.pravatar.cc/');
    }

    return(
        <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
            <label>👫 Friend name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

            <label>🖼️ Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>

            <Button>Add</Button>
        </form>
    )
}