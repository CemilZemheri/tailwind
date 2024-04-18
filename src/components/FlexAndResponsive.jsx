

const FlexAndResponsive = () => {
    const arr =[1, 2, 3, 4, 5, 6, 7, 8 ]
  return (
    <>
    <div className="flex flex-row flex-wrap ">
        <div className="basis-1/4 bg-fuchsia-200">01</div>
        <div className="basis-1/4 bg-fuchsia-300">02</div>
        
        <div className="basis-1/4 bg-fuchsia-400">03</div>

        <div className= "basis-1/4 bg-fuchsia-500">04</div>
        <div className= "basis-2/4 bg-fuchsia-600">05</div>
        <div className= "basis-2/4 bg-fuchsia-700">06</div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {arr.map((item, i) => (
            <div key={i} className="bg-teal-500"> {item}</div>

        ))}
    </div>
    
    
    
    
    </>
  )
}

export default FlexAndResponsive