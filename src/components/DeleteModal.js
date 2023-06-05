import React from 'react';

const DeleteModal = ({ closeModal, confirmDelete }) => {
  return (
    <div className="modalAlerta">
      <div className="bg-gray-500 opacity-75 absolute inset-0"></div>

      <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl mx-4 sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            </div>
            <div className="">
              <div className="mt-2">
                <p className="fraseAlerta">¿Esta seguro que desea eliminar esa tarea?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={confirmDelete}
            type="button"
            className="coopeuch-button-alert"
          >
            Eliminar
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="coopeuch-button-alert"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
