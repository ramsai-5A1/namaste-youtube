import { bodyButtonsList } from "../utils/constants";

const ButtonList = () => {
    return (
        <div className="flex">
            {bodyButtonsList.map((element) => <RenderButton name={element}/>)}
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