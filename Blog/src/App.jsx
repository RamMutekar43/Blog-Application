import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from "./pages/Home" 
import Login from "./pages/Login" 
import CreatePost from "./pages/CreatePost" 
import Footer from './components/Footer';
import { useState } from 'react';
import MyBlogs from './pages/MyBlogs';
import {signOut} from "firebase/auth"



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const userSignOut = ()=>{
    signOut(auth).then(()=>{
      console.log("Function works")
      localStorage.clear()
      setIsAuth(false);
    })
  }



  return (
    // Routes and navbar
    <Router> 
      <div className=' w-full h-28 bg-slate-200'>
            <nav className=' flex justify-between h-28 items-center py-6 px-10 bg-white border-b-2 border-amber-900 fixed top-0 w-full'>
                <div id="nav-left" className=' h-full w-1/2 flex items-center ps-14 gap-3'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAADiCAMAAAD5w+JtAAABVlBMVEX////6+vqHPRn///3//v+JPBmHPRsAAACJPRf5+fn///zs5N+vfWqJPBv//v2HPhiDNgqialZ+LwCBLQDJwb2CNAC1gXGDLgB9MwCDPhi6kHz79O+XTyyHORYOAACEOBCPSBmPRiD4//nv4eCAKQB7KwAdAABJPDK+lYf78/SEOgiAOBDTs6eDMQiVVDvz4dPKoZBVREBMOy718eXs2tO/nI+jYU/HqpfGopvVu6nZwrmbXT60fmf///Ht4tGsiHafZ0auhWaZYVOKUC+RW0DXta/exL/i1MeKSDOffFW0eWOYaE2ufHLBlX2QTyeAPgbDioLFinf54eewqKSdko/f29ilaU5nXlgrFhCTiIN7cGo/MzEnDwi4uLGPQC+neFhXUkkxIx+opaUiAACCe3QaDABmVVRCKSXayqw1JBixbWPatJ2NJgbnzrzKu66ZWjLmuql4IwnifTCMAAAcNUlEQVR4nO1d+3+bRrbHI8AjJB5CwQghQt1YqWWE7K7kh+QkTmrH8m3q7N0mdtJs22x2s917e6+zt///L3fOoAdIgADJstpPziexZQTDfOecOa8ZDgzzmT7TZ/pMf3BaW7vrHsTS2rz9W218BB47XwvsKgOcH94CJOD2aEFdm3+MbocAXm4h7awkwLX8oiRrNUV0gZ1aQYDsQqVq1QDmFiecHq0awIV3Z7UA3kJnVgjg7XRldQDeUkdWxQ4uyKyHNbwCHLzNTqwAQDZ/m11g71pEFxExzGj/Npu/+9vfpZIBr+XWb3KXHFzKre8uos9yY1bKm2MSJDiWizcvdySia6kkh3ax3entFQ94xbZtx7EVWz5+tNfrmAnulL2bWSmt2Dx+cnhy7NRVxcYcx1mWxSEOWUq5rh1vNJ8IsdfeAQfTGYYvC82njuK6GCNelmXDMHjeMGSZ5xHmbMVVDpoFYcDkiLstotPJKZ1w9p6JWzaWEeIsjBVN1/V6vVze0l3bsW0CUsT2lvisF8PEZQNMYRjM3jeOaiOZ42xNx6dnpcvm8/PzTuf8eXOveNaSVZVILOGibh90zUgWLtWTYVMMZ+9p2eVEzraVOplofb8yAeVp9psbLceFSSk6+tPncFiKuOecvU5MKYSzUNQcMseQpl1U+yZ0XGIpI1hqFjwkjU61tWNznIxd9z8KbIS5WJqSIV5Lwjvlj7DO8TzW3G+bDe9QLhd2rWA+f+botoxtDR22o+67JA4mHsjdUhkTZWkrxQ5RHUIOGCN5+NipJqTOo50di1iO8ovdiPaWI6KJh7HLKzyHLb3Yl0AeBU/sQicXJWH3u4qCOOziXkTAvAQRTYxOuHQtkcPaS6L2AVq41pig3rFKFI1duWzMeffMlPQG5ne6SGzdn6ugMIfwZjiahDmNPQf00dajCKftts1EMngS03ivc6KsnfYFggxQJcFH6fyCeDnGVqkd7s7cKgcTN95+oYkiVyk9YECj5GI8r2l6UKxwsqEcPwmfqreZMUjqteRf6JyMyv9pMjmBibJnkSRUt5AhK8cRduLWRDSx12K+V0VR/vOhRAQS8CXRLGPKMcKeQlwC5SBiDt4WA5PCE77TiRK0DkfTLj11bUvktaIZZSZuJ1+ecNguyxyHKofEhmceZ+lQJwDV/Yiv73QTQs91kOUeEjnLjo9h9ohTbqndiG/vMCtaqFk8X/6LkFarTJCwXeFEe/PJgnq1MBJKGs+7JVOYd0lCulZ5UXt/5wn6CWqWEbJe7sa4mUnp+5pjyFvNBfRpYZRj2jULY727AHgSc75DHDyjcEuLUxlIyklVl0dalV0APkLbKo8qJwtpakHUJ5PPemkyixnzRkuRsd5bRFOLIamoIFRuEnRZ8JmvXr9+feU/0tzBSLt+vKDezU99CyHlepDmS2ujzDfrD9+uv703OiDlhKKLrMrNXZq7ABU1hLVz2p20XZKYH9bfFcxXb/868jpJXNVXMa8UV0XBdCoy2jnwPqfEJzGFH78GZD/c/8l3mCUM5PT+YtTV3PSsgmX3POPFP6y/Apiv7r/yH+1ZsqhXpZXgoNmyOfs6fqUkkq7ufy1BPjTIP+bxU120fo7IxmQhCPLW0q0uDKmr82gryiOeRe/W70EwdfX26y8DwtjVRdHN2qhHPjQjdBmyAAKx7fJmVO5yBl09fPv6SvKkNIDPFC1ReR8rFPEc8X+3NkGpumiKNrJpTzLERe/WP75+97FQWP86H/ziyw1XtF924q6N663/O3YSXjqA53VO1J5n81zurf/t1ccfXr37W3D2gRruKXiGDzPsbMidA0Cm4aUCuK2JotUe4EvJwl/Wrxjz3psf7v8iBC0Lyzy4UAx9O06DRvY1F8ARBi/NJPxG4ZzjLzOlXO6tv5MgafqWKJnJkRFKCrLOzJhGI/H5BDICXgoGFi4srG6TXqY3VsIvD69Aq1zdfxMSFu/vIKRGrSkBRXYVNhUPvxthZYMXJWZGz+bwVp/JSekTE/fWP8JVwhsipdMX93awrN/EXB45/4b4WGl6ENbW8vlUAvpc4zDuZOFf/quHBSEngZSGjc0DheCLC+Oj+Bc4PDXf0uI7KnN2q5DFU3y1/hpw5f92/yrMbW3UZFnZjrk+Db6pb5Piy21onFLKS+m1S+OrDwW46qf1j6FqlygY2S7FNLAUfPmSgrXiYLEoFRH2MRJLpPTHMPZJrFDVZNyKaSCjfEbN2nAyzxRZq5IPKVcbGPPDB6L8Webv6z+ELaCR5vZUWWzFuNjLwfdvG5FZkkstn68hLmIZ868fQjNlBPFhnRdrMZvU0uBbm3lVBBVqNnb3GCEtvMIHEtaSafcapDTke4KvW+e52oPoJqI6GmAZO3HW4O/E+5QKmw62DtPjo+wj7H/7r0gT/qnOo83Z+KbmbpBDI2Mf+C6x/1JwZGw1mVlp+ck1pcI/vhYkMigDmKHUq2OcAF+gq6zf+/TOGuJjA3HEDFjjjm5ibO/NwjfV5kficTICU3j7lRnpk/e2KL5IxbUWRmwwHoo6LSk8Mv+IFZ4x/0atjgbh6p+/mLDSBGEtG3VpdwvD/MtFAQzt+ASiiPMSw2PMU0fWthPiGx6QgH0E3tU/iZKJtJyHWzJ3aqbExwa/CT8vOTzGPLY5Yv+EOIBT7V7d/yUH+D6u/xQTF++XZZvgi7Q80fikiTv6T0j5wKL5whXdDTL/Ylalp/BBwAAwH34dsxwqVHXZbiUZtil8U7on5IyElCu6ol3K56QYfJO5ORIw0MQR5M6iE8JCyZaVJP5nhOyllcQI2i/z1mkhNjEx1NiDU4Q3P3rsW39DYUZc2TAcg3p+UTTmiE9jBvi9iPWLpsvzO/0ZiZcg++7/61MBYN6/R12XiEsf2NjQFrWMyw7HIPWV5yLi6700Q/Xu4cP1D38nMN/FJt3OFU4uxyYIB8RGTCvANPgYKsCJSGpf2LxaTeGeCb/8ePX6w/obCGvjklLbCpJ3kjwDEt5xdnxsIgGavKvQW6Hk8k4rxbYJ4V/EZzE/Plz/KIEbHXUhDW+vZ3QmSreM3LKQk9JBzDF7Gs/zKdLzwsM3a0zu1f23oGSi2depYbm8F99UZL8DB0LwpVE8/QrP24fJzy88fNOWXq9/uBefs/mkYqzHL7pFJ979f4fAS+fB1BBvx6+EBOjew4dfv1n/6oqR4vY6PX7kipjYnRgKgTe14DDTSs6mXFURLS6JovPop3+8/XH9F8i4xaU02pbFKY/i2hmj8OGZcD/XJp2nLABvFJEL2W8k5SCpJtFfo08E1et//Hj/nelZvuhGD1XMuf8Vd8ZET9kRPNYPIog80zJn/tgmjqJvfUuSrv761Zj+9Kc/+f766r9/vP+DJ5kxPsHjMwXbP0fsAw3FN/3FWuhZ6fExlxWZUwJrrVfrMXSfxHy04zHM6TkcV76MNTqRHQ0wbOqswLfJaFexuZ2S/075ezF0NdsxbJQsztqJndOBxJFfdQQzSovAx1TLhqyl2E8lzUqW9uqW6GwQIY7uRiS+oEQuBF9flJF9PNOXGlFuRrbbfGpz1p+fMInx5fO+JbFE+NJ5aUVN5vSoXdPTNCuZf6jxsvarEJmZoBTOv/zaMGEWOCtz/tqjgmaJ4masNU7T2oWCsNWJzrxQipDPhPl5Nt16yd4Wx7nPFrHdSGKEooKxuy3NiW8YO+SDf2YRT9jDpND9u3NHzER0mxqP7dP2rMFaC3Z1HL8GvxgvVvu/Sh3nPlcNhIzkXloUScz32Oa4eoKhGnZ1ytCFfhGk9HzYqMhYO4tJ5yUk81hFWD2BhNwsOxnW8eDxfMRZGfJO5rGCkfarOeeeP6FYQbxVMxl4nnXGbhofjnyY0pyCmx0doY7l8KL+7Mu0C50BEqoqL2KjzyRaMJ2KkIbjMYFkbuGk9D8aEnFl+8tsV1MStnViaCqHTNIF00i+BI/Mzz2gfVWU5fJ+dgHNbbuYE7cuU0hAJF/YCSwDXs/zbJRwomAZq8Vs21JZ4B7mkLphpsrMrkV0nF3842bSew0jrP8aXU4ijhpF1UaG+2071u+8U2qfqCIvV84y2EGh86KCEap8a0LWN+3Dn8ui/IaOkaFwKfJpHgldm/Be/N+NuB11K0DsdtkyOEt9X0g1iQokAuF5Tr0UGGFVhdOj3KFhWQhrXxwmVzONpkHcV7xj0EeT0+8VWi71j1XDQKJ63aPdjOcG+Va6KVVsngxJ64ahObcVeawjkswN25ER72hnvdmqvt0r2Q7iLFsrprMLd0hSt+XyvMjZ5YPDeFX6ffOFpdgY29ppE7BlfEpkHspkJNv7joJ5UVTUly+6u8JgGTMHy0W5QSUfxmx3ixe6iziMNXubZm9ys+qFZejKLMrmsUm7j3Z0i0ecrajuwX6vUwh03ex390sKsedQWctWin3G2wcTq1nYlFmTpJRt2IT+hlOxRCjqpqia0bouVrf3m83m0Xa1eN3a1MqKLCMZO5p18kSg/rQUn5C4HfZlbpj4f53L47Jqk+nFQR0txYKyZ67rKuQPByq9IUvTW9WORGQXNppL8auktwaPyRYzwTQzeyciQWSROeYRASsbBkd+8I7j7mycm8xgajLxT+/ebo2i7GPHmjfVUgtt6ZpCGclxjqO45bLy8sV2r+1NSnb0I6YHq1DAJ4IeP+l39wjKmqWqGt5slYp7zfPdx6BTEroq84Slt34Db5lWyjcaDVr9szHYPQvbrxOmo24ZHb3FEu4RQcsqgLaEm4TfeSlu251Vl1nWfe8G4K2rlsC9lnarAbHeY2DLoqUDXCb3GCZFjcwF3W/ZA7rs8Vz+jF/eLdOUw10cLe+mdwKPWRoHf18F6Ff1LuF3/mP7u0u4+V3NvfH9b7P1xb7VLBPdKsC75t4td2EF4DG3m8+6rZZT0W11Y0Xg3ZIYzWp1VhZ4kbQAgJMJphnwJAJvicuDC+fgTJlY7trnXCIqFfq9T58+9fqFUeI6sj1qDs1Oj9LsV+8koqNiGJ3s99qB/b7eb/OEfrufFG+7t9GqQe7edbnawcYN7CuICYgks1M9aG0iRdddVLs42Hsw/1JhcUtTXFfT4Ccsi5D/OvmlqNq3/fFZgy4VdnRC5et8RGNBKuy9dGzLsgwDGYZsKYpyevggJhFodq/r2o4NKxiWZZPTK+p1L9mtYvBpsixzmPxAiEOI/OIw+cVZVkUrPhithngAC1/A3ZXS7JvmmLXDl3XEI9JVjDn4J2PL2Wo1I3nff1pWyHmiCGeLdIlG1vTrObebFl1OlkUR4CGOoz+44Se9NnokzovTCl/A4olSSrBrol38TcEix8F4AT4yZqRJZOul8B3cwr7m8KRxnoefHBkOZCBR5B2tOZeQFl0R4GDkQRsR/dPdHI8eACx8YZFvCL6ZKwqdlk44TfAhDCJKmIgGpJ+FFTpiq7pCxg4ReCI934IRJ6xEuH45D0CoOguL4yqh8pBcawDS8RX6JwALm6KIDKVkzqqjVbhwkSfviiqfHh8fn26qmgdRVk6nK0wLJ5pNpIgj01RVauT845qt2paIYC5GlnJPig8hvrrtp6KoYcpDQ6+OFu1IOAP4OB5KMcU32vi3DcIgchVlo9svmKZZ6H96JrsW3AtrZ1P7s450xAPznPrB0U0H1p92e0dnZRsRMRWhbGzmNXmiX8g9T9uw74EuHQuEcubRpgLDjxTFVxQY8CWaf7BPG3O8ZRcLvkfkClXZpixUNybO72gwHohzj2EzTW6weyvfa2nwojbktLLbQsDHy7UHwqATOUpEm53aHO2LXziG+mWGfN6ooCR4x+jSPbrgTMLWApa5OaXSgivB55gaLxxqFdwTU8qR0R3tyTbfaxZH9OjWUXZ8ChELuVbwaktIA3wAcMfiQeH530RB7IPHv1gHqnGmAD6Lv6H7QQan0vcI7RKAhFE71z4JYKWuBvOMs6qPJQFcz/Gec/OFyxkGb120s3psRdIXwEevD/i1e2URxloM4COKR5wln00VgxbUuvD0/YQxv9GoAVKf+46ZJZeYA075hu4KZQJvdOlsWkS++OxVXgk+YtRrYJRYIkM+uStsgsLDTsF/yOKo/oyrlCJcO0jGnFYVwt6Csa15Iu5roFMHU2IZHYY+5BoU/X3dIPNHe5bVRhB88gDfhFGTju1pfJ59iJXPXWJRiXrhO6FKb5cHfFj3PUxfrcAh9xkNGyaLAXRsxIuyXcv6XNcI37RXeB2Kj9r3uBb3AZ+sfBfxurVHCjEESB1v/mVrNrEk8Bw8lc6JoTOvbfA+1KxuWlEljgIPJcjoK2P8X3n4+In5h9AM/r2A2SSXP0E9nJCvbyrE3Bp2cXSgA84bsi4apAchBThPYMaK9ayV+Kl9IPhyMNoB4RBaFtWfPmaB/vTmHz0v1Eg0Tm14DydvEqMQ9iBC23s159ikdRVZNpBbhPak6Yl9qBHTL9azFlEpqgSEEYbvxgJ86pGvj4R/ZDAIvi+jnxLpvLThnGuT7via3gxIBQ7hzVH0ta/KhIH1w4g3fDXLqq5pvx1l3BYL+hM5gA824vjZV1SIZ4OxLwoEfDzIZxy+nkOsA69uCMOCNwGOkOm1oRKfhLNH7VZVIqBc/SYCX6fbJdF8N0xBJMQnywSfMPk8wrYOjluweBDRL8SawPyLxtesYMI/dV9ghJBngQiGozIRGKSPLFrRJfzjRCh/O+NpzixE9YsTLHEoQSZCB39XCXp+oD8hvm0wMfjq2OB5Im6BEgqjpiWmuQWO32hCSd/Cm3OpOZEYYfH4qH9d223TXWPtNv3R2Wtp8LZetQVqeSwYxL4TP4rgi5TPNeaQRO0GT7o/LlAWPK+7BfO6PMQnlCg+WsQuQ33mmfiIfiHeol2hpNF/FVWxRV62699+zwTxfQFvs42Zf+was1/niUdM8OVi8Y0MoFlSCD65FlOEkFJGxlL9wvPITzwc4I3jrjRhAob+dSQ+cmhfFXkDbRF8EQzsbkFkGYdPIP6fIAwvFwTyz4wtnjcDn4ymya7935rn9AfswyD/EoevTvBx5S4MTSQ+jiuP8blDfAP5NE8ODg6uD/xUOnieUXQp/3w0Si/xrVIzPyEVNH6YyT9DRtzgXRGJ8FlDfIK3E9ZsaYpiKzt+Kh9lFFAvPzGJzyJ2wFa01nMI4MbzgvqfFJ8Qja8ie/jYMb6A6ZrCZ6MRPnqExI8Q7Y62cwNpRxnXeqn/gnC5rtZVH9kwJWWlchjwCcf4wvkHWcSjOnH4xPLg2fZU8jmIgcwzuolbpAC9ucOrWSN4zz78fF7o+Gj3U5GneUNc3vfv6If4b5Z8HtVBO83Ch8Lnn/dabso/xI/Qefgyzj+wD9x0iebdEmWsVfFHzqP8RAy+wzox7zLYhzh8Rt2nP5Fn/yC8hhi0cbZVLqvlupeytLw00FFGBUrzLxjCx5z30NCgRhPRYgokCO3TifjBy7/E4SPsG+IL0y/Uf5FH/kves+88nX8UQv6m66NL4CGvH2V86SDkXxDgY6WJ8qVmi8Z//vL+Q/0ZxT+Yf82KwXNQlc6HL3DSng4cUYfNskUd8EGplCGHAomEGzwvPiQTfF60FmjjnEqocu3DN8h/DuffFEBypLdjGLJRhmqMoYVKpCrFJ48C1hOIHxCJH6RhjiWgKm8gZJlr/smUf1PJoJxJIlWiYlrjBMWk/gwSBcj0DccwIAaOcF/MFzYxIHi4siEx+wrF140ostylBlo9ymrfQX/i0PRN4xGkBjA/jgAT4GNhVIiCEdu5UHgkficDytmDwITozOcUn3YS4WKS+J3yL+M7Tan+pPLJTJX4r6rAP2Wc+qD5F2M8/6bxkT6+oI+N1W8mCxwPqFeBZK5d8u5FfnZEwGdfwOwIWZeqat78i+Ff3D4vmt8l2lnyklf+RoSqSkPclPj2AR+8+W5wOHDzHFPckYlrsjWYT0RpSxeAD+uQT5yO/4SiPcDnwzPRaJgmn8BXCBkdk2YoZG1cwJLYd1nmx/YhBB+8SQ/wOacPJqtfUHiFn0EFY7czViMb1EVUNkLxPaBZZlT28W9KKKZu48c3kM8Q2W8bHODD49QjwUfOjuUfFDZzCD5e+0vY43y5qstRFSyMcxE3ddAg+ILmrycvaOrUf/Hhm5b6WHyQHwzn314FIifbrz9H+TMhGh/TVHmRxEiVsJRlj+aqOXgp16gyaPspXclRXpjC1HiYLccY4POjSYFvqF8mjktMX7ZEEcn2r2PFDfNPFAEfOyBm8Cpq/8RtHOyAU2VPVi4l5+zyNiyva2fm+DWlLNOt0IVdtTotnlS7BOUzFF+khqHx3xgfFRAqJjcviR8iipg4oJIPn0jxCTTwJSSBEFLD6btDr0Kdxp2Xfb8vQj70f7bAW+KIyvIDIQGRF8Rsm7Si6BA3vKgazY9PJv7LpH9dOFSIHsCcaJ+a4wCJ2j+slWaUY3hcVGmKw3L2/Xm5B9sqiSt5qJxFGxiz/Ebx9jeUS+esL9zsnKjWAJ8+jo+G+MadiCunT/0XtPmo6qPLy9JphcRfBB8fjB8oPrtWDaP9wvD+bLsFWpk3eO30pNtuABW6jy5U0ibBR6STpTUpRu0K+7oB0wxr1jeHHdNcazTM3WbR0BAJ0mzA6Ct8GMK/OPsH/gvPw3YhH1HHDKhcFXwrb57/SUy+7SqViuI4CrmuUqk4jlPR3M7o9mznpc1TshRVlWu1GlY1ZZDGUmrTa0FmseKlSbCtqdoX/67VdlTXprkE+/qS9EbfDtq/AKQ4zwb4BytIkDUbJM/IP6jTAvDUXxuMr9aHFz9wsCRuyPRUY/zJW+IZjG3/1EUUoGEAKgfWVIjXJiNRO+2EVKBofLtlD+8vy44j0x1VBJ/Fdfo7SNarGTOjZKrIlIJpGNK2jBX1xAwMkBf/0Y0jsK+BQwB0+IlGPCPheXJdx/IAHwVGEx7yjl5qh77IxdxXbMxNdaNCRqPNW7JbnL4kOT4EDIN/yPtFP1n6Zpe+cXOcVfbygxB+QwwkI/gPvZBhhYvu+hgbw8YRXx4IKbCE/sAa2hOi5Knb0u0JfLb6/gkZjQN4+WdWfFvagCqDFDYlXbdae20qmD7H9sGO6p3gpbqHKW+P6t/43zRI5kd7+0Itk2CJMk7kbF2rXcYtMzcOz+yyPSgQQNSY7ra6tNbPXl2rHGfMXx8VNwZ7PjcGBB+L20fn8GpvyA6O8x6seULOOvHO8F3h0aOTtUBBWTIshf86OXZ++21ri/yzzqrdxoxyg49vtkv81m/kit9+s2qXvYY3uoXvNjaqoYvBCUhipRAafhlgHztKuedpiVj61+gSULQB1Q2NCGbhiUdtU0jy/k5zeAE9n1KOIXeSllH2Z9A7P4rgW4MnLS/8BRu+hDQVNaVATvkOKGBhQxxtdurUO+poRhqUg50unTr5IrdxxcM76mk2Gry+c/DHtHyO8bFrf2x8oQssK09sfvziEz++qRcNhuavfwc0RuTLUkPBlwk8v1N4wRiM9XPN/4WPsb83WgujyC9+f/imcORD1M3vGN4UjryvbHP+DwBvCuDIAkzVq77LTs5DoegosX8AdEAjEFPJ06yvKPhMn+kzfabP9HukedX9qpuLeePUFcc3f/dWGuACOrfCDs1iura6ABeUIlqBokthtMBxX0mAC+zTKoroYru0agAXPeKLrjn4/3tYikpBP2oyAAAAAElFTkSuQmCC" alt="" 
                    className=' h-30 w-20 rounded-lg'/>
                </div>
                <div id="nav-right" className=' w-2/4 h-full pe-14'>
                    <ul className=' flex justify-end items-center h-full font-semibold gap-10'>
                            <li><NavLink to="/" 
                            className={({isActive})=>`${isActive ? "bg-amber-900 text-white" : "bg-white text-amber-900"} font-bold border-amber-900 px-6 py-3 rounded-full border-2 hover:bg-amber-900 hover:text-white transition-all`}>
                            Home</NavLink></li>
                            {!isAuth ? <li><NavLink to="/login"
                            className={({isActive})=>`${isActive ? "bg-amber-900 text-white" : "bg-white text-amber-900"} font-bold border-amber-900 px-6 py-3 rounded-full border-2 hover:bg-amber-900 hover:text-white transition-all`}>
                            Login</NavLink></li> : 
                            <>
                            <li><NavLink to="/myblogs"
                            className={({isActive})=>`${isActive ? "bg-amber-900 text-white" : "bg-white text-amber-900"} font-bold border-amber-900 px-6 py-3 rounded-full border-2 hover:bg-amber-900 hover:text-white transition-all`}>
                            My Blogs</NavLink></li>
                            <li><NavLink to="/createPost"
                            className={({isActive})=>`${isActive ? "bg-amber-900 text-white" : "bg-white text-amber-900"} font-bold border-amber-900 px-6 py-3 rounded-full border-2 hover:bg-amber-900 hover:text-white transition-all`}>
                            Create Post</NavLink></li>
                            <li><NavLink to="/login"
                            className={({isActive})=>`${isActive ? "bg-amber-900 text-white" : "bg-white text-amber-900"} font-bold border-amber-900 px-6 py-3 rounded-full border-2 hover:bg-amber-900 hover:text-white transition-all`}
                            onClick={()=>{
                              userSignOut;
                              setIsAuth(!isAuth)
                            }} >
                            Logout</NavLink></li>
                            </>
                            }
                    </ul>
                </div>
            </nav>
        </div>

      <Routes>
        <Route path="/" element={<Home isAuth= {isAuth}/>} />
        <Route path="/myblogs" element={<MyBlogs isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
