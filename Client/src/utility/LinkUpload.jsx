import React, {useState} from "react";
import serverApi from "./server";

const LinkUpload = ({ closeModal }) => {
  const [dataUpload, setDataUpload] = useState({});

  const handleChange = (e) => {
    setDataUpload({ ...dataUpload, [e.target.name]: e.target.value });
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataUpload);
        try {
            const payload = dataUpload

            const abortController = new AbortController();
            const response = await serverApi.post(
                "/resources/create",
                payload,
                {
                    signal: abortController.signal,
                    headers: {
                        'content-type': 'application/json',
                    }
                }
            )

            if (response.status === 200 || 201) {
                let message = response.data.message

                setDataUpload({});
                closeModal()
                alert(message)
            } else {
                alert("Resource upload failed")
            }
            return
        } catch (e) {
            alert(e.message)
        }
  };
  const handleClose = (e) => {
    e.preventDefault();
    closeModal()
  };

  return (
    <div className="w-[80%] flex  justify-start my-10 p-4 items-center gap-6 flex-col h-[435px] rounded-md">
      <div className="w-full flex flex-col gap-5  lg:mx-2">
          <div className="w-full">
              <label htmlFor="Name" className="">
                  Resource Name
              </label>{" "}
              <br/>
              <input
                  type="text"
                  name="name"
                  className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
                  onChange={handleChange}
                  placeholder="Enter Resource Name"
              />
          </div>
          <div className="w-full">
              <label htmlFor="Name">Tech Stack</label>
              <select
                  id="stack"
                  name="stack"
                  className="placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC]  p-3 w-full rounded-md mt-2 "
                  placeholder="select"
                  onChange={handleChange}
              >
                  <option>Select a stack</option>
                  <option value="Software Development ">Software Development</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cloud Engineering">Cloud Engineering</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="Project Management">Project Management</option>
              </select>
          </div>
          <span className="text-sm text-gray-300">For resources with links</span>
      </div>
        <div className="w-full">
            <label htmlFor="Name">Type</label>
            <select
                id="type"
                name="type"
                className="placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC]  p-3 w-full rounded-md mt-2 "
                placeholder="select"
                onChange={handleChange}
            >
                <option>Select a type</option>
                <option value="api">API</option>
                <option value="design">Design</option>
                <option value="props">Props</option>
                <option value="database">Databases</option>
                <option value="storage">Storage</option>
                <option value="e-book">E-book/PDF</option>
                <option value="video">Video</option>
                <option value="documentation">Documentation</option>
                <option value="audio">Audio</option>
                <option value="projects">Projects</option>
                <option value="other">Others</option>
                <option value="blog">Blog</option>
                <option value="repo">Repository</option>
            </select>
        </div>

      <form className="flex flex-col gap-4 w-full">
        <div className="">
          <label htmlFor="Name" className="text-black text-base">
            File Description{" "}
            <span className="ml-5 text-sm text-slate-300">Optional</span>
          </label>{" "}
          <br />
          <textarea
              name="description"
            rows={4}
            className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-1 w-full rounded-md"
              placeholder="Describe the resource"
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="Name" className="">
              Resource URL
          </label>{" "}
          <br />
          <input
            type="url"
            name="url"
            className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
            placeholder="Input resource link"
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full justify-start items-start gap-3">
          <button
            onClick={handleSubmit}
            className="flex justify-center items-center text-sm md:text-lg  md:font-semibold w-[310px] h-[54px] rounded-md bg-tblue text-white mb-4"
          >
            Publish Document
          </button>
          <button
            onClick={handleClose}
            className="flex justify-center items-center text-sm md:text-lg font-semibold w-[150px] h-[54px] rounded-md bg-[#EFF0F5] mb-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkUpload;
