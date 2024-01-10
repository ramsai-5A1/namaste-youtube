import { bodyButtonsList } from "../utils/constants";

const ButtonList = () => {
    return (
        <div className="flex w-screen overflow-x-auto m-2 p-2 border">
            {bodyButtonsList.map((element, index) => <RenderButton key={index} name={element}/>)}
            <RenderButton name={"All"}/>
        </div>
    )
};

const RenderButton = ({name}) => {
    return (
        <div>
            <button className="bg-black inline-block hover:bg-gray-300 hover:text-black rounded-lg text-white  h-10 m-2 py-2 px-4 w-auto ">{name}</button>
        </div>
    )
}

export default ButtonList;