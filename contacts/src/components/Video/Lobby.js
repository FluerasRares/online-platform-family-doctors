import React from 'react';

const Lobby = ({
                   username,
                   handleUsernameChange,
                   roomName,
                   handleRoomNameChange,
                   handleSubmit
               }) => {
    return (
        <form className={"video-form"} onSubmit={handleSubmit}>
            <h2>Enter a room</h2>
            <div>
                <label htmlFor={"name"}>Name: </label>
                <input
                    type={"text"}
                    id={"name"}
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>

            <div>
                <label htmlFor={"room"}>Room name: </label>
                <input
                    type={"text"}
                    id={"room"}
                    value={roomName}
                    onChange={handleRoomNameChange}
                    required
                />
            </div>
            <button className={"video-button"} type={"submit"}>Submit</button>
        </form>
    )
}

export default Lobby;