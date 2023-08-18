
import serverApi from "./server";

const uploadFile =  (file,type) => {
    return serverApi.post(
        type === "image" ? "/utils/upload-image" : "/utils/upload-file",
        file,
        {
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`,
            }
        }
    )
}
export default uploadFile
