const mahasiswaNim = "20221314";
const updatedData = {
  nama: "Livia",
  gender: "P",
  prodi: "TE",
  alamat: "Jl. Cibolang Kaler",
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
