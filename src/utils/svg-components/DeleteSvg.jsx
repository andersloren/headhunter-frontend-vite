function DeleteSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280zm400-600H280v520h400v-520zM360-280h80v-360h-80v360zm160 0h80v-360h-80v360zM280-720v520-520z" />
    </svg>
  );
}

export default DeleteSvg;
