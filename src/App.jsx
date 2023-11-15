
import {
  Root,
  Head,Link,Title,Bio,Content,Avatar,Group
} from '@linkzy/react'
import { YoutubeIcon,TwitchIcon,TwitterIcon,LinkIcon } from './icons'
export default function App() {
  return (
    <Root className='grid place-items-center text-gray-900'>
      <Head className='p-4 flex justify-center flex-col gap-4'>
        <Avatar className='grid place-items-center'>
          <img src="https://pbs.twimg.com/profile_images/1719501275807830016/NYZz_7xX_400x400.jpg" className="rounded-full  h-64 w-64 shadow-lg" />
        </Avatar>
        <Content className=' p-4  flex flex-col gap-2 text-center'>
          <Title label="Javier Diaz" className='font-black text-4xl'/>
          <Bio className='text-xl  text-gray-700 font-normal'>A software engineer who designs</Bio>
        </Content>
      </Head>
      <Group className='grid grid-cols-2 gap-3 '>
        <Link
          className='flex  gap-2 text-red-500 border rounded-lg p-4 border-red-200 hover:bg-red-200 hover:text-red-800 hover:border-transparent transition-colors ease-in-out duration-200 '
          href="https://youtube.com/@coderdiaz"
          label="Visita mi canal de Youtube"
          icon = {<YoutubeIcon/>}
        />
        <Link
         className='flex  gap-2 text-purple-500 border rounded-lg p-4 border-purple-200 hover:bg-purple-200 hover:text-purple-800 hover:border-transparent transition-colors ease-in-out duration-200'
          href="https://twitch.tv/coderdiaz"
          label="Visita mi canal de Twitch"
          icon = {<TwitchIcon/>}
        />
        <Link
         className='flex  gap-2 text-blue-500 border rounded-lg p-4 border-blue-200 hover:bg-blue-200 hover:text-blue-800 hover:border-transparent transition-colors ease-in-out duration-200'
          href="https://twitter.com/coderdiaz/"
          label="Echale un Vistazo a mi Feed"
          icon={<TwitterIcon/>}
        />
        <Link
         className='flex  gap-2 text-orange-500 border rounded-lg p-4 border-orange-200 hover:bg-orange-200 hover:text-orange-800 hover:border-transparent transition-colors ease-in-out duration-200'
          href="https://coderdiaz.dev/contacto"
          label="Ponte en contacto conmigo"
          icon={<LinkIcon/>}
        />
      </Group>
    </Root>
  )
}


/*
                                                                                          
                       ....                       
                  -*%%#****#%%*-.                 
               -#%+-.        .:+%#-               
             .#%-   :+*#%%%#+-   -%%:             
            -@+  .+%*-.    .-*%+. .=@=            
           .@=  :@#.           *@: .=@:           
           #%   %#              *@. .#%           
           @*  -@:              .@- .+@           
           @+  -@.               @= .+@           
           @+  -@.               @= .+@           
        =##@%##%@%###############@%#%%@%#=        
        @*---------------------------===*@.       
        @*---------------------------===*@.       
        @*------------+#%%#+---------===*@.       
        @*----------=@@#*+*%@+-------===*@.       
        @*----------#@*+++++@%-------===*@.       
        @*----------+@%*+++#@*-------===*@.       
        @*-----------=@@*+@@+--------===*@.       
        @*-----------=@%*+#@=--------===*@.       
        @*-----------*@*+++@#--------===*@.       
        @*-----------%@%%%%@@--------===*@.       
        @*-----------========--------===*@.       
        *@+============================+%#        
         =%%##########################%%=         
            ::::::::::::::::::::::::::             
             GITHUB/ MAIKCYPHLOCK 


 */