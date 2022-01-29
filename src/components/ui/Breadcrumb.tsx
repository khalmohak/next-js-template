import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, useColorModeValue} from "@chakra-ui/react";
import {useRouter} from "next/router";

const CustomBreadCrumb = ()=>{
    const router = useRouter()
    const path = router.route.split('/').filter(item=>item.trim()!=='')
    return(
        <Breadcrumb
        color={useColorModeValue('blue.800','grey.100')}
        mb={2}
        >
            {path.map((item,index)=>{
                return(
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink onClick={()=>router.push(`/${path.slice(0,index+1).join('/')}`)} >
                            {item}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}
export default CustomBreadCrumb;