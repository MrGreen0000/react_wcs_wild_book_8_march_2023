import { useState } from "react";
import axios from "axios";


export default function AddWilderForm({ fetchData, id }) {
    const [name, setName] = useState("");


    return (
        <form className="container"
            onSubmit={async (event) => {
                event.preventDefault();
                await axios.post(`http://localhost:5000/api/wilder`, { name });
                fetchData();
            }}>
            <div>
                <label htmlFor="name">Name </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Charlie Chaplin"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>


            <button>Submit</button>
        </form>
    );
};