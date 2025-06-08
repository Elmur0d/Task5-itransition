'use strict'
        const dataGenerators = {
            'en-US': {
                firstNames: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 
                            'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'],
                lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
                           'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White'],
                publishers: ['Penguin Random House', 'HarperCollins', 'Simon & Schuster', 'Macmillan', 'Hachette', 
                            'Scholastic', 'Disney Publishing', 'Oxford University Press', 'Cambridge University Press'],
                words: ['The', 'Shadow', 'Wind', 'Secret', 'Last', 'Night', 'Day', 'Time', 'Light', 'Dark',
                        'Mountain', 'River', 'Sea', 'Sky', 'Star', 'Moon', 'Sun', 'World', 'City', 'Road',
                        'Silent', 'Whisper', 'Echo', 'Dance', 'Song', 'Dream', 'Promise', 'Memory', 'Hope', 'Fear',
                        'Girl', 'Boy', 'Woman', 'Man', 'Child', 'King', 'Queen', 'Prince', 'Princess', 'Lord',
                        'Ancient', 'Forgotten', 'Hidden', 'Lost', 'Stolen', 'Broken', 'Silent', 'Final', 'First', 'Last'],
                reviewTexts: [
                    "This book completely changed my perspective on the subject. A must-read!",
                    "While the premise was interesting, I found the execution lacking in some areas.",
                    "Absolutely brilliant! Couldn't put it down until I finished it.",
                    "The characters felt flat and the plot was predictable. Disappointing.",
                    "A masterpiece of modern literature that will stand the test of time.",
                    "I enjoyed the book but felt it dragged in the middle sections.",
                    "The author's prose is beautiful and evocative. Highly recommended.",
                    "Not my usual genre but I was pleasantly surprised by how much I liked it.",
                    "The ending felt rushed and unsatisfying after such a strong start.",
                    "One of the best books I've read this year. Can't wait for the sequel!"
                ],
                reviewAuthors: ['BookLover42', 'LiteraryFan', 'PageTurner', 'CriticAtLarge', 'Bibliophile', 
                               'ReadingRainbow', 'NovelIdeas', 'ProsePros', 'WordWizard', 'StorySeeker']
            },
            'de-DE': {
                firstNames: ['Hans', 'Peter', 'Michael', 'Thomas', 'Andreas', 'Wolfgang', 'Klaus', 'Werner', 'Helmut', 'Jürgen',
                            'Maria', 'Ursula', 'Monika', 'Petra', 'Elisabeth', 'Sabine', 'Renate', 'Helga', 'Brigitte', 'Ingrid'],
                lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
                           'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'],
                publishers: ['Random House Deutschland', 'Ullstein Verlag', 'Suhrkamp Verlag', 'Fischer Verlag', 'Piper Verlag',
                             'dtv Verlagsgesellschaft', 'Carl Hanser Verlag', 'Rowohlt Verlag', 'S. Fischer Verlag'],
                words: ['Der', 'Die', 'Das', 'Schatten', 'Wind', 'Geheimnis', 'Letzte', 'Nacht', 'Tag', 'Zeit',
                        'Licht', 'Dunkel', 'Berg', 'Fluss', 'Meer', 'Himmel', 'Stern', 'Mond', 'Sonne', 'Welt',
                        'Stadt', 'Straße', 'Stille', 'Flüstern', 'Echo', 'Tanz', 'Lied', 'Traum', 'Versprechen', 'Erinnerung',
                        'Hoffnung', 'Angst', 'Mädchen', 'Junge', 'Frau', 'Mann', 'Kind', 'König', 'Königin', 'Prinz',
                        'Prinzessin', 'Herr', 'Alte', 'Vergessene', 'Verborgene', 'Verlorene', 'Gestohlene', 'Gebrochene', 'Letzte', 'Erste'],
                reviewTexts: [
                    "Dieses Buch hat meine Sichtweise völlig verändert. Ein Muss!",
                    "Während die Prämisse interessant war, fand ich die Ausführung in einigen Bereichen mangelhaft.",
                    "Absolut brillant! Konnte es nicht aus der Hand legen, bis ich fertig war.",
                    "Die Charaktere wirkten flach und die Handlung war vorhersehbar. Enttäuschend.",
                    "Ein Meisterwerk der modernen Literatur, das die Zeit überdauern wird.",
                    "Ich habe das Buch genossen, aber es zog sich in den mittleren Abschnitten hin.",
                    "Die Prosa des Autors ist wunderschön und eindringlich. Sehr zu empfehlen.",
                    "Nicht mein übliches Genre, aber ich war angenehm überrascht, wie sehr es mir gefiel.",
                    "Das Ende fühlte sich überstürzt und unbefriedigend an nach einem so starken Anfang.",
                    "Eines der besten Bücher, die ich dieses Jahr gelesen habe. Ich kann die Fortsetzung kaum erwarten!"
                ],
                reviewAuthors: ['Buchliebhaber', 'Leseratte', 'Literaturfan', 'Kritiker', 'Bücherwurm',
                                'Lesefreund', 'Romanfan', 'Wortkünstler', 'Geschichtensammler', 'Bücherfreund']
            },
            'ja-JP': {
                firstNames: ['太郎', '健太', '翔太', '大輔', '拓也', '涼太', '翔', '翼', '大輝', '陸',
                            '花子', '愛', '優子', '美咲', 'さくら', '陽子', '恵', '麻衣', '由美', '香織'],
                lastNames: ['佐藤', '鈴木', '高橋', '田中', '渡辺', '伊藤', '山本', '中村', '小林', '加藤',
                           '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '林', '斎藤', '清水'],
                publishers: ['講談社', '集英社', '小学館', '新潮社', '角川書店', '文藝春秋', '幻冬舎', '早川書房', '光文社'],
                words: ['闇', '光', '風', '秘密', '最後', '夜', '日', '時間', '星', '月',
                        '太陽', '世界', '街', '道', '静か', '囁き', '響き', '踊り', '歌', '夢',
                        '約束', '記憶', '希望', '恐怖', '少女', '少年', '女性', '男性', '子供', '王',
                        '女王', '王子', '姫', '主', '古代', '忘れ', '隠れ', '失われ', '盗まれ', '壊れ',
                        '最初', '最後'],
                reviewTexts: [
                    "この本は完全に私の見方を変えました。必読です！",
                    "前提は面白かったのですが、いくつかの点で実行が不十分だと感じました。",
                    "まったく素晴らしい！読み終わるまで手放せませんでした。",
                    "キャラクターは平板で、プロットは予測可能でした。がっかりです。",
                    "時代を超える現代文学の傑作です。",
                    "本は楽しめましたが、中間部がだらだらと感じました。",
                    "作者の散文は美しく、印象的です。強くお勧めします。",
                    "普段読まないジャンルですが、どれだけ気に入ったかに驚きました。",
                    "強いスタートの後、結末は急ぎ足で不満足に感じました。",
                    "今年読んだ中で最高の本の一つです。続編が待ちきれません！"
                ],
                reviewAuthors: ['本好き', '読書家', '文学ファン', '批評家', '本の虫',
                               '読書友', '小説ファン', '言葉の匠', '物語コレクター', '本友']
            },
            'fr-FR': {
                firstNames: ['Jean', 'Pierre', 'Michel', 'André', 'Philippe', 'Claude', 'Jacques', 'Bernard', 'Daniel', 'Nicolas',
                            'Marie', 'Nathalie', 'Isabelle', 'Sylvie', 'Françoise', 'Martine', 'Christine', 'Monique', 'Valérie', 'Sandrine'],
                lastNames: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
                           'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier'],
                publishers: ['Gallimard', 'Flammarion', 'Éditions du Seuil', 'Grasset', 'Albin Michel', 
                            'Fayard', 'Robert Laffont', 'Stock', 'Presses de la Cité'],
                words: ['L\'ombre', 'Le vent', 'Le secret', 'La dernière', 'La nuit', 'Le jour', 'Le temps', 'La lumière', 'L\'obscurité',
                        'La montagne', 'La rivière', 'La mer', 'Le ciel', 'L\'étoile', 'La lune', 'Le soleil', 'Le monde', 'La ville', 'La route',
                        'Le silence', 'Le murmure', 'L\'écho', 'La danse', 'La chanson', 'Le rêve', 'La promesse', 'Le souvenir', 'L\'espoir', 'La peur',
                        'La fille', 'Le garçon', 'La femme', 'L\'homme', 'L\'enfant', 'Le roi', 'La reine', 'Le prince', 'La princesse', 'Le seigneur',
                        'L\'ancien', 'L\'oublié', 'Le caché', 'Le perdu', 'Le volé', 'Le brisé', 'Le silencieux', 'Le dernier', 'Le premier'],
                reviewTexts: [
                    "Ce livre a complètement changé ma perspective sur le sujet. Une lecture incontournable!",
                    "Bien que la prémisse soit intéressante, j'ai trouvé l'exécution déficiente dans certains domaines.",
                    "Absolument brillant! Je n'ai pas pu le poser avant de l'avoir fini.",
                    "Les personnages semblaient plats et l'intrigue prévisible. Décevant.",
                    "Un chef-d'œuvre de la littérature moderne qui résistera à l'épreuve du temps.",
                    "J'ai apprécié le livre mais j'ai trouvé qu'il traînait dans les sections du milieu.",
                    "La prose de l'auteur est belle et évocatrice. Hautement recommandé.",
                    "Pas mon genre habituel mais j'ai été agréablement surpris par combien je l'ai aimé.",
                    "La fin semblait précipitée et insatisfaisante après un si bon départ.",
                    "Un des meilleurs livres que j'ai lus cette année. J'attends la suite avec impatience!"
                ],
                reviewAuthors: ['AmoureuxDesLivres', 'FanDeLittérature', 'TourneurDePages', 'Critique', 'Bibliophile', 
                               'ArcEnCielLecture', 'IdéesRomanesques', 'ProsedePro', 'MagicienDesMots', 'ChercheurD\'Histoires']
            },
            'es-ES': {
                firstNames: ['Antonio', 'Manuel', 'José', 'Francisco', 'David', 'Juan', 'Javier', 'Daniel', 'Carlos', 'Miguel',
                            'María', 'Carmen', 'Ana', 'Isabel', 'Laura', 'Pilar', 'Lucía', 'Sara', 'Elena', 'Teresa'],
                lastNames: ['García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Martín',
                            'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Álvarez', 'Muñoz', 'Romero', 'Alonso', 'Gutiérrez'],
                publishers: ['Planeta', 'Santillana', 'Anagrama', 'Alfaguara', 'Ediciones B', 
                            'Tusquets Editores', 'Seix Barral', 'Destino', 'Espasa Calpe'],
                words: ['La sombra', 'El viento', 'El secreto', 'El último', 'La noche', 'El día', 'El tiempo', 'La luz', 'La oscuridad',
                        'La montaña', 'El río', 'El mar', 'El cielo', 'La estrella', 'La luna', 'El sol', 'El mundo', 'La ciudad', 'El camino',
                        'El silencio', 'El susurro', 'El eco', 'El baile', 'La canción', 'El sueño', 'La promesa', 'El recuerdo', 'La esperanza', 'El miedo',
                        'La chica', 'El chico', 'La mujer', 'El hombre', 'El niño', 'El rey', 'La reina', 'El príncipe', 'La princesa', 'El señor',
                        'El antiguo', 'El olvidado', 'El oculto', 'El perdido', 'El robado', 'El roto', 'El silencioso', 'El último', 'El primero'],
                reviewTexts: [
                    "Este libro cambió completamente mi perspectiva sobre el tema. ¡Imprescindible!",
                    "Si bien la premisa era interesante, encontré la ejecución deficiente en algunas áreas.",
                    "¡Absolutamente brillante! No pude dejarlo hasta terminarlo.",
                    "Los personajes parecían planos y la trama predecible. Decepcionante.",
                    "Una obra maestra de la literatura moderna que resistirá el paso del tiempo.",
                    "Disfruté el libro pero sentí que se alargaba en las secciones del medio.",
                    "La prosa del autor es hermosa y evocadora. Altamente recomendado.",
                    "No es mi género habitual pero me sorprendió gratamente cuánto me gustó.",
                    "El final se sintió apresurado e insatisfactorio después de un comienzo tan fuerte.",
                    "Uno de los mejores libros que he leído este año. ¡No puedo esperar por la secuela!"
                ],
                reviewAuthors: ['AmanteDeLibros', 'FanLiterario', 'PasadorDePáginas', 'Crítico', 'Bibliófilo', 
                               'ArcoírisDeLectura', 'IdeasNovelísticas', 'Prosista', 'MagoDePalabras', 'BuscadorDeHistorias']
            }
        };

        const coverColors = [
            'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
            'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
            'linear-gradient(135deg, #a6c1ee 0%, #fbc2eb 100%)',
            'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
            'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        ];

        let currentState = {
            language: 'en-US',
            seed: 12345,
            likes: 3.7,
            reviews: 4.7,
            currentPage: 1,
            loadedBooks: [],
            tableView: true
        };

        const languageSelect = document.getElementById('language');
        const seedInput = document.getElementById('seed');
        const randomSeedBtn = document.getElementById('randomSeed');
        const likesSlider = document.getElementById('likes');
        const likesValue = document.getElementById('likesValue');
        const reviewsInput = document.getElementById('reviews');
        const bookTableBody = document.getElementById('bookTableBody');
        const loadingDiv = document.getElementById('loading');
        const tableViewBtn = document.getElementById('tableViewBtn');
        const galleryViewBtn = document.getElementById('galleryViewBtn');
        const tableView = document.getElementById('tableView');
        const galleryView = document.getElementById('galleryView');
        const exportBtn = document.getElementById('exportBtn');

        function init() {
            languageSelect.addEventListener('change', handleLanguageChange);
            seedInput.addEventListener('change', handleSeedChange);
            randomSeedBtn.addEventListener('click', generateRandomSeed);
            likesSlider.addEventListener('change', handleLikesChange);
            reviewsInput.addEventListener('change', handleReviewsChange);
            tableViewBtn.addEventListener('click', () => toggleView(true));
            galleryViewBtn.addEventListener('click', () => toggleView(false));
            exportBtn.addEventListener('click', exportToCSV);
            
            window.addEventListener('scroll', handleScroll);
            
            updateUI();
            loadBooks();
        }

        function handleLanguageChange() {
            currentState.language = languageSelect.value;
            currentState.currentPage = 1;
            currentState.loadedBooks = [];
            updateUI();
            loadBooks();
        }

        function handleSeedChange() {
            const newSeed = parseInt(seedInput.value) || 0;
            if (newSeed !== currentState.seed) {
                currentState.seed = newSeed;
                currentState.currentPage = 1;
                currentState.loadedBooks = [];
                updateUI();
                loadBooks();
            }
        }

        function generateRandomSeed() {
            const randomSeed = Math.floor(Math.random() * 1000000);
            seedInput.value = randomSeed;
            currentState.seed = randomSeed;
            currentState.currentPage = 1;
            currentState.loadedBooks = [];
            updateUI();
            loadBooks();
        }

        function handleLikesChange() {
            currentState.likes = parseFloat(likesSlider.value);
            likesValue.textContent = currentState.likes.toFixed(1);
            updateUI();
        }

        function handleReviewsChange() {
            currentState.reviews = parseFloat(reviewsInput.value);
            updateUI();
        }

        function toggleView(tableView) {
            currentState.tableView = tableView;
            if (tableView) {
                tableViewBtn.classList.add('active');
                galleryViewBtn.classList.remove('active');
                tableView.style.display = 'block';  
                galleryView.classList.remove('active');
            } else {
                tableViewBtn.classList.remove('active');
                galleryViewBtn.classList.add('active');
                tableView.style.display = 'none';  
                galleryView.classList.add('active');
            }
        renderBooks();
    }

        function updateUI() {
            languageSelect.value = currentState.language;
            seedInput.value = currentState.seed;
            likesSlider.value = currentState.likes;
            likesValue.textContent = currentState.likes.toFixed(1);
            reviewsInput.value = currentState.reviews;
        }

        function loadBooks() {
            loadingDiv.style.display = 'block';
            
            setTimeout(() => {
                const newBooks = generateBooks(currentState.currentPage);
                currentState.loadedBooks = [...currentState.loadedBooks, ...newBooks];
                currentState.currentPage++;
                renderBooks();
                loadingDiv.style.display = 'none';
            }, 500);
        }

        function generateBooks(page) {
            const books = [];
            const generator = dataGenerators[currentState.language];
            const booksPerPage = page === 1 ? 20 : 10;
            
            for (let i = 0; i < booksPerPage; i++) {
                const recordNumber = (page - 1) * 20 + i;
                const combinedSeed = currentState.seed + recordNumber;
                const rng = new Math.seedrandom(combinedSeed.toString());
                
                const title = generateTitle(generator, rng);
                const author = generateAuthor(generator, rng);
                const isbn = generateISBN(rng);
                const publisher = generator.publishers[Math.floor(rng() * generator.publishers.length)];
                
                const likes = Math.round(rng() * 20 * currentState.likes);
                const reviewCount = calculateReviewCount(rng);
                
                books.push({
                    index: recordNumber + 1,
                    title,
                    author,
                    isbn,
                    publisher,
                    likes,
                    reviewCount,
                    reviews: generateReviews(generator, reviewCount, rng),
                    coverColor: coverColors[Math.floor(rng() * coverColors.length)]
                });
            }
            
            return books;
        }
        
        function generateTitle(generator, rng) {
            const wordCount = 2 + Math.floor(rng() * 4);
            let title = '';
            
            for (let i = 0; i < wordCount; i++) {
                const word = generator.words[Math.floor(rng() * generator.words.length)];
                if (i === 0 || (currentState.language === 'en-US' && i === 0)) {
                    title += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
                } else if (currentState.language === 'de-DE' || currentState.language === 'fr-FR' || currentState.language === 'es-ES') {
                    title += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
                } else {
                    title += word + ' ';
                }
            }
            
            return title.trim();
        }

        function generateAuthor(generator, rng) {
            const firstName = generator.firstNames[Math.floor(rng() * generator.firstNames.length)];
            const lastName = generator.lastNames[Math.floor(rng() * generator.lastNames.length)];
            
            if (rng() < 0.3) {
                const firstName2 = generator.firstNames[Math.floor(rng() * generator.firstNames.length)];
                const lastName2 = generator.lastNames[Math.floor(rng() * generator.lastNames.length)];
                
                if (currentState.language === 'ja-JP') {
                    return `${lastName} ${firstName}、${lastName2} ${firstName2}`;
                } else {
                    return `${firstName} ${lastName} & ${firstName2} ${lastName2}`;
                }
            }
            
            if (currentState.language === 'ja-JP') {
                return `${lastName} ${firstName}`;
            } else {
                return `${firstName} ${lastName}`;
            }
        }

        function generateISBN(rng) {
            let isbn = '';
            for (let i = 0; i < 13; i++) {
                isbn += Math.floor(rng() * 10);
                if (i === 2 || i === 5 || i === 8 || i === 11) {
                    isbn += '-';
                }
            }
            return isbn;
        }

        function calculateReviewCount(rng) {
            if (currentState.reviews === 0) return 0;
            
            const integerPart = Math.floor(currentState.reviews);
            const fractionalPart = currentState.reviews - integerPart;
            
            let count = integerPart;
            if (rng() < fractionalPart) {
                count++;
            }
            
            return count;
        }

        function generateReviews(generator, count, rng) {
            const reviews = [];
            
            for (let i = 0; i < count; i++) {
                const text = generator.reviewTexts[Math.floor(rng() * generator.reviewTexts.length)];
                const author = generator.reviewAuthors[Math.floor(rng() * generator.reviewAuthors.length)];
                
                reviews.push({
                    text,
                    author,
                    rating: 1 + Math.floor(rng() * 5) 
                });
            }
            
            return reviews;
        }

        function renderBooks() {
            if (currentState.tableView) {
                renderTableView();
            } else {
                renderGalleryView();
            }
            
            addBookClickHandlers();
        }

        function renderTableView() {
            bookTableBody.innerHTML = '';
            
            currentState.loadedBooks.forEach(book => {
                const row = document.createElement('tr');
                row.dataset.index = book.index - 1;
                
                row.innerHTML = `
                    <td>${book.index}</td>
                    <td>${book.isbn}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.publisher}</td>
                    <td>${book.likes}</td>
                    <td>${book.reviewCount}</td>
                `;
                
                bookTableBody.appendChild(row);
            });
        }

        function renderGalleryView() {
            galleryView.innerHTML = '';
            
            currentState.loadedBooks.forEach(book => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.dataset.index = book.index - 1;
                
                item.innerHTML = `
                    <div class="gallery-cover" style="background: ${book.coverColor}">
                        <div class="book-cover-title">${book.title}</div>
                        <div class="book-cover-author">${book.author}</div>
                    </div>
                    <div class="gallery-info">
                        <div class="gallery-title">${book.title}</div>
                        <div class="gallery-author">${book.author}</div>
                        <div class="gallery-meta">
                            <span>${book.publisher}</span>
                            <span>❤️ ${book.likes}</span>
                        </div>
                        <div class="gallery-meta">
                            <span>📝 ${book.reviewCount} reviews</span>
                            <span>⭐ ${calculateAverageRating(book.reviews)}</span>
                        </div>
                    </div>
                `;
                
                galleryView.appendChild(item);
            });
        }

        function calculateAverageRating(reviews) {
            if (reviews.length === 0) return 'N/A';
            const sum = reviews.reduce((total, review) => total + review.rating, 0);
            return (sum / reviews.length).toFixed(1);
        }

        function addBookClickHandlers() {
            const items = currentState.tableView 
                ? document.querySelectorAll('#bookTableBody tr')
                : document.querySelectorAll('.gallery-item');
                
            items.forEach(item => {
                item.addEventListener('click', () => {
                    const index = parseInt(item.dataset.index);
                    toggleBookDetail(index);
                });
            });
        }

        function toggleBookDetail(index) {
            const book = currentState.loadedBooks[index];
            
            const existingDetail = document.querySelector('.book-detail.active');
            if (existingDetail) {
                existingDetail.classList.remove('active');
                if (parseInt(existingDetail.dataset.index) === index) {
                    return;
                }
            }
            
            const detail = document.createElement('div');
            detail.className = 'book-detail active';
            detail.dataset.index = index;
            
            const reviewItems = book.reviews.map(review => {
                const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
                return `
                    <div class="review">
                        <div class="review-author">${review.author} <span style="color: gold;">${stars}</span></div>
                        <div class="review-text">${review.text}</div>
                    </div>
                `;
            }).join('');
            
            detail.innerHTML = `
                <div class="book-info">
                    <div class="book-cover" style="background: ${book.coverColor}">
                        <div class="book-cover-title">${book.title}</div>
                        <div class="book-cover-author">${book.author}</div>
                    </div>
                    <div>
                        <h2>${book.title}</h2>
                        <p><strong>Author:</strong> ${book.author}</p>
                        <p><strong>Publisher:</strong> ${book.publisher}</p>
                        <p><strong>ISBN:</strong> ${book.isbn}</p>
                        <p><strong>Likes:</strong> ${book.likes}</p>
                        <p><strong>Average Rating:</strong> ${calculateAverageRating(book.reviews)} (${book.reviewCount} reviews)</p>
                    </div>
                </div>
                <div class="book-reviews">
                    <h3>Reviews</h3>
                    ${book.reviewCount > 0 ? reviewItems : '<p>No reviews yet.</p>'}
                </div>
            `;
            
            if (currentState.tableView) {
                const row = document.querySelector(`#bookTableBody tr[data-index="${index}"]`);
                row.parentNode.insertBefore(detail, row.nextSibling);
            } else {
                const item = document.querySelector(`.gallery-item[data-index="${index}"]`);
                item.parentNode.insertBefore(detail, item.nextSibling);
            }
        }

        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            
            if (scrollTop + clientHeight >= scrollHeight - 100) {
                loadBooks();
            }
        }

        function exportToCSV() {
            const headers = ['Index', 'ISBN', 'Title', 'Author', 'Publisher', 'Likes', 'Reviews'];
            const data = currentState.loadedBooks.map(book => [
                book.index,
                book.isbn,
                book.title,
                book.author,
                book.publisher,
                book.likes,
                book.reviewCount
            ]);
            
            const csvContent = [headers, ...data].map(row => 
                row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(',')
            ).join('\n');
            
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', `books_${currentState.language}_${currentState.seed}.csv`);
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js';
            script.onload = init;
            document.head.appendChild(script);
        });