document.addEventListener('DOMContentLoaded', function() {
    // Get the nav element
    const navElement = document.querySelector('nav');
    
    // Check if nav element exists
    if (navElement) {
        // Set the HTML content
        navElement.innerHTML = `
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="https://chris-gruber.com/">CG <span class="navbar-brand2">Director of Photography</span></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
            <li class="hidden">
            <a href="#page-top"></a>
            </li>
            <li>
            <a href="https://chris-gruber.com/fundraiser/">fundraiser</a>
            </li>
            <li>
            <a href="https://chris-gruber.com/info/">Info</a>
            </li>
            <li class="hidden">
            <a href="../commercial">Commercial</a>
            </li>
            <li class="language-toggle">
            <span class="language-option" data-lang="en">EN</span>
            <label class="switch">
              <input type="checkbox" id="language-switch">
              <span class="slider round"></span>
            </label>
            <span class="language-option" data-lang="de">DE</span>
            </li>
            </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
        `;
        
        // Add styles for the toggle switch
        const style = document.createElement('style');
        style.textContent = `
            .language-toggle {
            display: flex;
            align-items: center;
            margin-top: 15px;
            }
            .language-option {
            cursor: pointer;
            padding: 0 5px;
            }
            .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
            }
            .switch input {
            opacity: 0;
            width: 0;
            height: 0;
            }
            .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            }
            .slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            transition: .4s;
            }
            .slider.round {
            border-radius: 20px;
            }
            .slider.round:before {
            border-radius: 50%;
            }
            input:checked + .slider {
            background-color:rgb(0, 0, 0);
            }
            input:focus + .slider {
            box-shadow: 0 0 1pxrgb(0, 0, 0);
            }
            input:checked + .slider:before {
            transform: translateX(20px);
            }
        `;
        document.head.appendChild(style);
        
        // Add event listener for the toggle switch
        const languageSwitch = document.getElementById('language-switch');
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        
        // Set initial state
        if (currentLang === 'de') {
            languageSwitch.checked = true;
        }
        
        languageSwitch.addEventListener('change', function() {
            const lang = this.checked ? 'de' : 'en';
            localStorage.setItem('preferredLanguage', lang);
            location.reload();
        });

        if (!localStorage.getItem('preferredLanguage')) {
            // Check if browser language indicates a German locale
            if (navigator.language && navigator.language.toLowerCase().startsWith('de')) {
            localStorage.setItem('preferredLanguage', 'de');
            languageSwitch.checked = true;
            }
        }
        
        // Also allow clicking on language labels
        const langLabels = navElement.querySelectorAll('.language-option');
        langLabels.forEach(label => {
            label.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            localStorage.setItem('preferredLanguage', lang);
            languageSwitch.checked = (lang === 'de');
            location.reload();
            });
        });
    } else {
        console.error('Navigation element not found in the DOM');
    }

    window.addEventListener('scroll', function() {
        const brand2 = document.querySelector('.navbar-brand2');
        if (brand2) {
            if (window.scrollY > 200) {
                brand2.style.color = 'black';
            } else {
                brand2.style.color = '';
            }
        }
    });
});