import React from 'react'
import InviIMG from '../IMG/InvitationBG.png'

const Invitation = () => {
  return (

    <div

      style={{
        backgroundImage: `url(${InviIMG.src})`, // Define a imagem como fundo
        backgroundSize: 'cover', // Garante que a imagem cubra todo o fundo
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundRepeat: 'no-repeat', // Evita repetição
        width: '100%', // Largura total
        height: '100vh', // Altura mínima da tela
        display: 'flex', // Define o layout como flexível
        justifyContent: 'center', // Centraliza horizontalmente
        alignItems: 'center', // Centraliza verticalmente
        padding: '50px 0', // Adiciona margem superior e inferior (50px)
      }}
      
    >

            <div className='flex flex-col justify-evenly items-center border py-10 px-5 rounded-[50px] bg-[rgba(3,3,3,0.8)] mx-4'>

                    <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-center px-1 font-semibold lg:text-[54px] lg:w-[620px] lg:leading-none font-['Audiowide']">
                      Entre para o Clube de 
                      <span className="text-[#4A90E2] text-3xl text-center font-semibold lg:text-[54px] lg:w-[620px]  font-['Audiowide'] pl-[10px]">
                       Recompensas!
                    </span>
                    </h1>
              
                    <p className="text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[448px] lg:text-start pt-10 pb-10">
                      Cadastre-se agora e comece a acumular pontos
                      para trocar por prêmios incríveis!
                    </p>
                    <button className="bg-[#4A90E2] lg:hover:bg-[#1456a3] lg:w-[70%] w-[55%] h-[50px] rounded-[10px] justify-center items-center font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(74,144,226,0.4)] flex">
                       Cadastre-se Agora
                    </button>
                  </div>

            </div>

        
      
    </div>
  )
}

export default Invitation