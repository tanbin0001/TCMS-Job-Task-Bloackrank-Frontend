import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/authSlice";
import { useNavigation } from "@react-navigation/native";
 
 
const ProtectedRoute = ({children}) => {
    const token = useAppSelector(useCurrentToken);
    const navigation = useNavigation();
    if(!token){
        navigation.navigate("Login");
    }
    return  children;
};

export default ProtectedRoute;