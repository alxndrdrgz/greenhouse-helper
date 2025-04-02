export default function PlantCard({ data }){
 return (
    <div className="border rounded-sm text-center">
      <div 
        className="text-2l font-extrabold bg-black text-white w-full px-8 py-2"
      >
        Plant Reference:
      </div>
      <div className="p-4 mb-2">
        <h2>Name: {`${data.common_name}`}</h2>
        <p>Scientific Name: {`${data.scientific_name}`}</p>
        <p>Family: {`${data.family}`}</p>
      {data.image_url && (
        <img 
          src={data.image_url} 
          alt={data.common_name} 
          className="max-w-xs mt-4 rounded-sm"
        />
      )}
      </div>
    </div>
 )
}