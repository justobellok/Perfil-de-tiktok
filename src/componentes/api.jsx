

const keyapi = "QpVkTQFYbwpYrMhY7XjaOwHnTSnKazLz"

const Datos = ({keyword} = {})=>{

const api = `https://api.giphy.com/v1/gifs/search?api_key=${keyapi}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

return fetch(api)
.then(res => res.json())
.then(Response =>{
    const { data = [] } = Response
    const gif = data.map((item)=>{
    const { images } = item
    const { url } = images.fixed_width
    return { url }
    })
    return gif
})
  

}

export default Datos;