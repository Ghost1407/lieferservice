import Link from 'next/link'
import Image from 'next/image'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'


export default function Navigation() {
    const wAnzahl = useSelector((state) => state.warenkorb.wAnzahl);

    return (
        <div className="shadow sticky-top p-2 mb-2 bg-danger">
            <div className="d-flex justify-content-between align-items-center">
                <Link legacyBehavior href="/">
                    <a>
                        <Image src={'/logo-text-only-2.svg'} alt='logo' width={220} height={76} />
                    </a>
                </Link>
                <Link legacyBehavior href="/warenkorb">
                    <a>
                        {wAnzahl > 0 ? (
                            <>
                                <Image src={'/bilder/warenkorb.png'} alt='warenkorb' width={30} height={30} />
                                <Badge pill bg="success" style={{ position: "absolute", right: "25px", top: "25px" }}>{wAnzahl}</Badge>
                            </>
                        ) : (
                            <Image src={'/bilder/warenkorb.png'} alt='warenkorb' width={30} height={30} />
                        )}
                    </a>
                </Link>
            </div>
        </div>
    )
}
