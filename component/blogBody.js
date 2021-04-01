import React, { useState } from 'react'
import { withStyles } from '@material-ui/core'
// import urlMapper from '../utiliy/api/urlMapper'
import { Button } from '../component/index'
import { useRouter } from 'next/router'
// import { deleteBlog } from '../redux/action/blogAction'
// import { useDispatch } from 'react-redux'

const BlogBody = (props) => {
    const router = useRouter()
    // const dispatch = useDispatch()
  let [readMore, setReadMore]=useState(false)
  let { title, id, image, description } = props.blog
  return <>
    <div className={'card'}>
        <div className={'cardHeader headerbeside'}>
            <div className={'title'}>{title}</div>
            <div>
            <Button text={'Edit'} onClick={() => {
                router.push({
                    pathname: `/edit-blog/[id]`,
                    query: { id: id },
                })
            }} />
            <Button text='Delete' onClick={() => {
                // dispatch(deleteBlog(id))
                router.push('/')
            }}/>
            </div>
        </div>
        <div className={'cardBody'}>
            {image !== '' && <img src={`${urlMapper.BLOG_IMAGES}${image}`} className={'blogImage'} />}
            <p>
                {
                    description.length > 500 ? <span>
                        <span>{description.substring(0, 500)}</span>
                        <span>{readMore ? description.substring(500, 50000000000000000000000000000000) : null}</span>
                        <span onClick = {
                            () => {setReadMore(!readMore)}
                        } style={{color: "green",cursor: "pointer"}}> {readMore ? 'Read Less <<' : 'Read More >>' } </span>
                    </span> : <span>{description}</span>
                }
            </p>
        </div>
    </div>
  </>
}
const STYLES = {

}
export default withStyles(STYLES)(BlogBody)