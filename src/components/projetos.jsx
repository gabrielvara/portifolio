import Card1 from './card-1';
import Card2 from './card-2';
import Card3 from './card-3';

const projetos = () => {
  return (
    <section className='flex flex-col justify-center items-center m-20'>
        <h1 className="font-inter text-textcolor text-5xl font-bold mb-10">Projetos</h1>
        <div className='flex flex-wrap flex-row gap-16 justify-center items-center'>
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
    </section>
  )
}

export default projetos