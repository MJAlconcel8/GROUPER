import { UserAuth } from "../context/AuthContext"

export default function Homepage() {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1 onClick={handleSignOut}>Hello World</h1>
        </>

    )
}