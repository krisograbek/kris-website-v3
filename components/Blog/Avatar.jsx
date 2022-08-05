import Image from "next/image";

const Avatar = ({ name, picture }) => {
  console.log(picture)
  return (
    <div className="flex items-center">
      {/* <div className="rounded-full w-20 h-20"> */}
      <Image src={picture} className="rounded-full" width="40" height="40" alt={name} />
      {/* </div> */}
      <div className="text-xl font-bold pl-8">{name}</div>
    </div>
  )
}

export default Avatar