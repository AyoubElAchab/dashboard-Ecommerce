import PageComponent from "../components/PageComponent";
import { userStateContext } from "../contexts/ContextProvider";


export default function Surveys(){
    const {surveys} = userStateContext();
    console.log(surveys)

    return(
        <>
            <PageComponent title="Surveys" >

            </PageComponent>
        </>
    )
}
