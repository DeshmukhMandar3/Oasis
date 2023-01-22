import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Button,Text,Grid,GridItem,Box,Image,Tab,TabList,TabPanel,TabPanels,Tabs,Input, Img,Spinner
  } from '@chakra-ui/react'
  import {ChevronLeftIcon} from "@chakra-ui/icons";
  import { Authcontext } from '../../AllContexts/AuthContext';
  // json-server --watch db.json --port 8080
  import { useState ,useEffect} from 'react'
  import React from 'react'
  import axios from 'axios'
  import { useToast } from '@chakra-ui/react'
  import { useContext } from 'react'
   
  
  let url='https://backend-cw-4.onrender.com/register'
  let userulr='https://backend-cw-4.onrender.com/user'
  
  const Login=()=>{
   const { isOpen, onOpen, onClose } = useDisclosure()
   const toast = useToast()
  
  
   //authsignin login
  const {auth,setauth,userdata,setuserdata}=useContext(Authcontext)
  
   //Back button
   const [backpage,setbackpage]=useState(true)
  
   //Register data
  const [email, setemail] =useState('')
  const [mobile, setmobile] =useState('')
  const [password, setpassword] =useState('')
  const [Registerdata,setRegisterdata]=useState('')
  const [checkboxs, setcheckboxs] =useState('')
  
  
  //loading 
  const [loading,setlading]=useState(true)
  
  //checkbox 
  
  const handleChangecheckbox = () => { 
      
        setcheckboxs(!checkboxs); 
        
  }; 
  
  //Registerdata
  
  const addregisterdata=(event)=>{
   event.preventDefault()
   let obj={
        email:email,
        mobile:mobile,
        password:password
   }
   setRegisterdata(obj)
   getregisterdata(obj)
  }
  
  const getregisterdata=async(obj)=>{
        setlading(false)
    try {
        let resdata=await axios.get("https://backend-cw-4.onrender.com/register") 
        let data=resdata.data
       let count=0
        data.map((e)=>{
            if(e.email===obj.email || e.mobile==obj.mobile){
      
              count++
            }
        })
        setTimeout(() => {  
        if(count==0){
              postregisterdata(obj) 
        }else{
              toast({
                    title: 'User already exists',
                    description: "please login ",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position:"top"
                  })
        }setlading(true)
  }, 4000)
  
    } catch (error) {
        console.log("error")
    }
  }
  
  
  const postregisterdata=async(obj)=>{
        try {
              let registerdatas=await axios.post("https://backend-cw-4.onrender.com/register",obj)
              toast({
                    title: 'Register Successful',
                    description: "",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    position:"top"
                  })
                  setbackpage(false)
                 
                  postuserdatadata(obj)
                  setTimeout(() => { resendOTP()  }, 4000)
        } catch (error) {
              console.log('error')
        }
    
  }
  
  //Login
  
  const [verfiyemail,setverfiyemail]=useState('')
  const handleemailcheck=async()=>{
        setlading(false)
              try {
                  let resdata=await axios.get("https://backend-cw-4.onrender.com/register") 
                  let data=resdata.data
                 let count=0
                 
                  data.map((e)=>{
                      if(e.email===verfiyemail || e.mobile==verfiyemail){
                        console.log('yes data is match')
                        count++
                        postuserdatadata(e)
                      }
                  })
  
                  setTimeout(() => {
                   
                  if(count==0){
                    toast({
                          title: 'User not exists',
                          description: "please Register first ",
                          status: 'error',
                          duration: 4000,
                          isClosable: true,
                          position:"top"
                        })
                        setlading(true)
                  }else{
                    toast({
                          title: 'Login Successful',
                          description: "",
                          status: 'success',
                          duration: 3000,
                          isClosable: true,
                          position:"top"
                        })  
                        setbackpage(false)
                       
                        setlading(true)
                        
                        setTimeout(() => { resendOTP()  }, 3000)
                  }
              }, 2000)
             
            
              } catch (error) {
                  console.log("error")
                  setlading(true)
              }
                
  }
  
  
  
  //userdata
  const postuserdatadata=async(obj)=>{
       
        try {
              let userdatas=await axios.post("https://backend-cw-4.onrender.com/user",obj)
              console.log('usedta')
            
        } catch (error) {
              console.log('error')
        }
    
  }
  
  //backdeletdata
  
  
  const backpagedatas=async()=>{
        try {
            let resdata=await axios.get("https://backend-cw-4.onrender.com/user/") 
            let data=resdata.data
  
            userdatadelete(data[0].id)
          
      
        } catch (error) {
            console.log("error")
        }
          
  }
  const userdatadelete=async(id)=>{
        try {
              let userdelete=await axios.delete(`https://backend-cw-4.onrender.com/user/${id}`)
              setbackpage(true)
        } catch (error) {
              
        }
     
  }
  
  
  
  
  //OTP
  
    const [otp, setOtp] = useState("");
    const [verifyotp,setverfyopt]=useState('')
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(30);
  
    const Verifyopt=()=>{
        if(otp===verifyotp){
              toast({
                    title: 'Enjoy your shoping',
                    description: ``,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position:"top-left"
                  })
                  usedatacheck()
        }else{
              toast({
                    title: 'plase enter correct OTP',
                    description: ``,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position:"top-left"
                  })   
        }
    }
  
    const usedatacheck=async()=>{
        try {
            let resdata=await axios.get("https://backend-cw-4.onrender.com/user/") 
            let data=resdata.data
         if(data.length===0){
          setuserdata([])
            setauth(false)
      
          }else{
            setauth(true)
            console.log("userdata")
           console.log(data[0])
           setuserdata(data[0])
          }
      
        } catch (error) {
            console.log("error")
        }
          
      }
  
  
  const restartopt=()=>{
        let pin = Math.round(Math.random() * 10000);
        let pinStr = pin + '';
        if (pinStr.length == 4) {
              console.log(pinStr);
              setverfyopt(pinStr)
             } else {
              return getPin();
             }  
  }
    useEffect(() => {
        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
    
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
              restartopt()
            } else {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [seconds]);
    
      const resendOTP = () => {
        // setMinutes(1);
        setSeconds(30);
        getPin()
      };
  
     const getPin=() =>{
        let pin = Math.round(Math.random() * 10000);
        let pinStr = pin + '';
    
        // make sure that number is 4 digit
        if (pinStr.length == 4) {
            console.log(pinStr);
            toast({
              title: 'OTP',
              description: `${pinStr}`,
              status: 'success',
              duration: 9000,
              isClosable: true,
              position:"top-left"
            })
            setverfyopt(pinStr)
            
           } else {
            return getPin();
           }
        }
    
  
  if(!auth){
  
        return( 
                <>
        <Button ml='1000px' onClick={onOpen}>Login</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}  boxShadow={ "rgba(0, 0, 0, 0.35) 0px 5px 15px;"} >
          <ModalOverlay border={'1px solid red '}  />
          <ModalContent >
              <Box  bg='white'  boxShadow={ "rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w='900px' m='auto'>
  
            
            <Grid
            boxShadow={ "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
    h='auto'
  
  
    templateColumns='repeat(8, 1fr)'
    gap={1}
  >
  
    <GridItem  colSpan={2} bg='#eff7fa'  >
    <Box m='auto' mt='20%' >
        <Image w={'30%'} h='40%' m='auto' src="http://cdn.onlinewebfonts.com/svg/img_460661.png"/>
        <Text textAlign={'center'} fontSize='19px' fontWeight={'bold'}>Loyalty Points</Text>
        <Text textAlign={'center'} fontSize='13px'>Earn CluesBucks on prepaid orders</Text>
    </Box>
    <Box m='auto' mt='20%' >
        <Image w={'30%'} h='40%' m='auto' src="https://static.thenounproject.com/png/237693-200.png"/>
        <Text textAlign={'center'} fontSize='19px' fontWeight={'bold'}>Instant Checkout</Text>
        <Text textAlign={'center'} fontSize='13px'>Hassle-Free Payment Everytime</Text>
    </Box>
    <Box m='auto'mt='20%' mb='20%'>
        <Image w={'30%'} h='40%' m='auto' src="http://cdn.onlinewebfonts.com/svg/img_60755.png"/>
        <Text textAlign={'center'} fontSize='19px' fontWeight={'bold'}>Exclusive Offers</Text>
        <Text textAlign={'center'} fontSize='13px'>For special offers & value deals</Text>
    </Box>
   </GridItem>
   {backpage? <GridItem colSpan={6}  bg='white' >
      
   {loading ? 
    <Tabs variant='unstyled' mt='20px'>
   <ModalCloseButton w='40px' mr='-460px' mt='-2' />
    <TabList ml='20px'>
   
      <Tab _selected={{ color: '#24a3b5', borderBottom:"2px solid #24a3b5" }} fontSize='18px' >LOGIN</Tab>
      <Tab _selected={{ color: '#24a3b5', borderBottom:"2px solid #24a3b5" }} fontSize='18px'>REGISTER</Tab>
    </TabList>
   
    <TabPanels ml='20px'>
      <TabPanel display={'block'}>
        <Box mt='5%'>
      <Input  variant='flushed' w='70%' type={'text'} value={verfiyemail} onChange={e => setverfiyemail(e.target.value)} placeholder='Enter your mobile number or email id' borderBottom="1px solid black" />
      </Box>
      <Box mt='5%'>
     <Button w='70%' h='50px' fontSize={'18px'} fontWeight={"bold"} bg='none' color=' #fb760b' onClick={handleemailcheck} border={'1px solid  #fb760b'}>Login via OTP</Button>
    
      </Box>
      <Box mt='7%'>
        <Box><Text fontSize={'20px'} fontWeight="bold">Social Login</Text></Box>
        <Box mt='3%' display={'flex'} gap='30px'>
              <Image w='10%' src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"/>
              <Image w='10%' src="https://img.freepik.com/free-icon/google_318-278809.jpg?w=2000"/>
        </Box>
  
      </Box>
      </TabPanel>
      <TabPanel>
      <Box mt='5%'>
      <Input  variant='flushed' w='70%' type={'text'} value={email} placeholder='Enter your email id' onChange={e => setemail(e.target.value)} borderBottom="1px solid black" />
      </Box>
      <Box mt='3%'>
      <Input  variant='flushed' w='70%'  type={'number'} value={mobile} placeholder='Enter your mobile number' onChange={e => setmobile(e.target.value)} borderBottom="1px solid black" />
      </Box>
     {checkboxs && <Box mt='3%'>
      <Input  variant='flushed' w='70%'  type={'password'} value={password} placeholder='Enter your password'  onChange={e => setpassword(e.target.value)}borderBottom="1px solid black" />
      </Box>}
      <Box mt='3%' display={'flex'} >
        <Box mt='1px'><input onChange={handleChangecheckbox}  type={'checkbox'}/></Box>
        <Box ml='1%'>
              <Text fontSize={'18px'} >Register with Password</Text>
              <Text fontSize={'13px'}>By Registering you accept our User Agreement and Privacy Policy</Text>
        </Box>
      </Box>
   
      <Box>
        <Button mt='5%' w='50%' fontSize={'20px'} bg="#ff5e62" fontWeight="bold" onClick={addregisterdata}>Register</Button>
      </Box>
      <Box mt='7%'>
        <Box><Text fontSize={'20px'} fontWeight="bold">Register With</Text></Box>
        <Box mt='3%' display={'flex'} gap='30px'>
              <Image w='10%' src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"/>
              <Image w='10%' src="https://img.freepik.com/free-icon/google_318-278809.jpg?w=2000"/>
        </Box>
  
      </Box>
      </TabPanel>
    </TabPanels>
  </Tabs>:  <Image src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
  />}
    </GridItem>:
  
  <GridItem colSpan={6}  bg='white' >
      <Box>
        <Button bg='none' onClick={backpagedatas} ><ChevronLeftIcon/>Back</Button>
      </Box>
      <Box ml='20px'>
      <Box>
        <Text fontWeight={'bold'} fontSize={'20px'}>Verification</Text>
        </Box>
      <Box display={'flex'}>
        <Text  fontSize={'17px'}>Please enter the OTP sent to </Text>
        
        <Text ml='5px' fontWeight={'bold'} fontSize={'17px'}>{email}</Text>
      </Box>
      <Box>
        <Text  fontSize={'16px'}>(If OTP is missing in Inbox, please check your spam folder).</Text>
        </Box>
        <Box mt='5%' display={'flex'}>
              <Input  variant='flushed' w='70%' type={'text'}  
            value={otp}
            onChange={({ target }) => {setOtp(target.value)}} 
            placeholder='Enter OTP' 
             borderBottom="1px solid black" />
              <Box >
              <Text
             
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={resendOTP}
            >
              Resend OTP
            </Text>
              </Box>
        </Box>
        <Box display={'flex'} mt='8%' justifyContent={'space-between'}>
              <Box ><Button bg={'#ff5e62'} w='300px' onClick={Verifyopt}>Verify</Button></Box>
              <Box mt='1%' ml='25%'color={'#757575'} >
              {seconds > 0 || minutes > 0 ? (
                    <Box display={'flex'}>
                          <Text>
                {seconds < 10 ? `0${seconds}` : seconds}  Second left 
               
              </Text>
              <Image ml={'4%'} w='10%' src='https://cdn1.vectorstock.com/i/1000x1000/31/85/stopwatch-glyph-icon-measure-and-countdown-timer-vector-25053185.jpg'/>
        </Box>
              
              
            ) : (
              <Text></Text>
            )}
              </Box>
        </Box>
      </Box>
  
      </GridItem>}
  </Grid>
  </Box>
          </ModalContent>
        </Modal>
      </> 
             
        )
  }
  }
  
  export default Login

