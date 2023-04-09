import { HashRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { ProfilePage } from './components/ProfilePage';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';

function App() {
    return (
        <>
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />}>
                        <Route path=":slug" element={<BlogPost />} />
                    </Route>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<p>Not found</p>}/>
                </Routes>
            </HashRouter>

        </>
        );
}

export default App;
