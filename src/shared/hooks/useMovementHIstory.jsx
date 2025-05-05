import { getMovementHistory } from "../../services";

export const useMovementHistory = () => {
    const fetchMovementHistory = async () => {
        const response = await getMovementHistory();
        return response;
    };

    return { fetchMovementHistory };
};