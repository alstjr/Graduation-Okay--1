import '../css/GraduateOk.css';


function GraduateOk() {

    return (
        <>
            <main>
                <section className="section">
                    <div className='Graduate__check'>

                        <div className='Graduate_Possible'>
                            <br />졸업 가능 <br /><br />
                        </div>

                        <div>
                        <table className='OkTable'>
                            <tr className='Ok__menu'>
                                <th className='Lack__Graduate__Credit'> 졸업 학점</th>
                                <th className='Lack__MajorCredit'>전공 학점 </th>
                                <th className='Lack__KyCredit'> 교양 학점 </th>
                                <th className='Lack__NonSub'> 비교과 이수 여부 </th>
                            </tr>
                            
                            <tr>
                                <td className='Lack__Graduate__Credit'> 130 </td>
                                <td className='Lack__MajorCredit'> 80 </td>
                                <td className='Lack__KyCredit'> 50 </td>
                                <td className='Lack__NonSub'> pass </td>
                            </tr>


                        </table>
                        </div>

                        {/* <div className='Lack__Graduate__Credit'>
                            졸업 학점 20 미달
                        </div>
                        <div className='Lack__MajorCredit'>
                            전공 학점 20 미달
                        </div>
                        <div className='Lack__KyCredit'>
                            교양 학점 20 미달
                        </div> */}

                    </div>
                </section>
            </main>
        </>
    );
}

export default GraduateOk;