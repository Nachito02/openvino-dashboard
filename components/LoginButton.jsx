import React from "react";
import Web3 from "web3";
import { closeAlert, showAlert } from "@/redux/actions/alertActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LoginButton = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loginWithMetamask = async () => {
    setIsLoading(true);
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicitar al usuario que apruebe la conexión y acceda a su cuenta de Metamask
        await window.ethereum.enable();

        // Obtener la dirección de Ethereum del usuario y cualquier otra información necesaria
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];

        // Realizar acciones adicionales según sea necesario, como enviar la dirección a un servidor para autenticar al usuario

        // Establecer el estado de inicio de sesión como verdadero
        // setLoggedIn(true);
      } catch (error) {
        console.error(error);
        // Manejar errores de inicio de sesión
        //    setError('No se puedo completar la autenticacion')
        dispatch(
          showAlert("No se puedo completar la autenticacion intente nuevamente")
        );
      } finally {
        setIsLoading(false);


        setTimeout(() => {
                dispatch(closeAlert())
        }, 3000)
      }
    } else {
      dispatch(
        showAlert(
          "Metamask no está instalado o no se detectó el proveedor de Ethereum"
        )
      );
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={loginWithMetamask}
      className={`border
       border-pink-900
        hover:bg-pink-900
         hover:text-white
          px-3 py-2  
          transition 
          disabled:text-gray-200
           disabled:border-gray-900
           disabled:hover:bg-white
           `}
    >
      Ingresar
    </button>
  );
};

export default LoginButton;
