import { Button } from 'react-native'


interface Props {
    title: string;
    color: string
}


const CustomButton = ({ title, color } : Props)=> {
    return (
        <Button
            title={title}
            color={color}
        />
    );
}



export default CustomButton;