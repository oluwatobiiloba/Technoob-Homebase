import serverApi from "./server";

const uploadFile = async (file, type) => {
    try {

        const formData = new FormData();
        formData.append(type, file);

        const response = await serverApi.post(
            type === "image" ? "/utils/upload-image" : "/utils/upload-file",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export default uploadFile;
