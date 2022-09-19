import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Delete, Title } from '../src/components/Icon';
import Layout from '../src/vuexy/Layout';
import { adminAuthStatus } from '../__lib__/helpers/Cookiehandler';
import { showErr } from '../__lib__/helpers/ErrHandler';
import { authPost, deleteData, getData } from '../__lib__/helpers/HttpService';
import { adminAuth } from '../__lib__/helpers/requireAuthentication';

export default function Authors() {

    const [ loading, setLoading ] = useState(true);
    const [ authors, setAuthors ] = useState([]);
    const [ disable, setDisable ] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onError = err => showErr(err);

    const router = useRouter();

    useEffect(()=>{
        fetctAuthors();
    }, [])

    const fetctAuthors = () =>{
        getData(`/authors`)
            .then(data=>{
                if(data){
                    setAuthors(data);
                    setLoading(false);
                }
            })
    }

    const onSubmit = async data => {
        const { isAdmin, token } = await adminAuthStatus(); 
        setDisable(true)
        await authPost('/admin/author', data, token)
        .then(res=>{
            if(res?.success)
            {  
                toast.success(res.message);
                fetctTags();
                reset();
                setDisable(false)
            }
        })     
    }

    const handleDelete = async _id =>{
        const { token} = await adminAuthStatus(); 
        deleteData(`/admin/tag?_id=${_id}`, token)
        .then(res=>{
           if(res?.success){
            toast.success(res.message);
            fetctTags();
           }else{
            toast.error(res.error);
           }
        })
    }

    return (
        <Layout>
            <div className="content-body">
            <div className="row">
                <div className="col-md-12">
                    <div className="c-white p-2">
                        <div className="card-body">
                        <form
                            onSubmit={handleSubmit(onSubmit, onError)}  
                        >
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="text-center mb-2">Add Author</h3>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="input-group-merge mb-1 input-group">
                                                <span className="input-group-text">
                                                    <Title/>
                                                </span>
                                                <input 
                                                    id="nameVerticalIcons" 
                                                    className="form-control" 
                                                    placeholder="Author Name" 
                                                    type="text" 
                                                    {...register("name",
                                                        {
                                                            required: 'Author name is required'
                                                        }
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="d-flex">
                                                <button
                                                    disabled={disable} 
                                                    type="submit" 
                                                    className="me-1 btn btn-primary"
                                                >Submit</button>
                                                <button 
                                                    type="reset" 
                                                    className="btn btn-outline-secondary"
                                                >Reset</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>

                    <h3 className="my-4">Tags</h3>
                    
                    {
                        !loading && <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tag Name</th>
                            <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            authors.length > 0 && authors?.reverse().map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row">{++index}</th>
                                        <td>{item.tagName}</td>
                                        <td className="text-center text-danger">
                                            <Delete
                                                handleDelete={ handleDelete }
                                                _id = { item._id }
                                            // onClick={()=>handleDelete(item._id)}
                                            />
                                            {/* <i role="button" class="fas fa-trash"></i> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                            
                        </tbody>
                    </table> 
                    }
                    {
                        loading && <div className="d-flex justify-content-center">
                            <div className="spinner-grow text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                      </div>
                    }
                </div>
            </div>
            </div>
        </Layout>
    )
}


export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})