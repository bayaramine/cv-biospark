\ProvidesClass{yaac-another-awesome-cv}[2018/07/19  v1.9.2 'YAAC: Another Awesome CV' Class]

\LoadClass[a4paper,11pt]{article}

\newif\if@showLinks   \@showLinksfalse

\DeclareOption{green}{
  \def\@green{green}
}

\DeclareOption{red}{
  \def\@red{red}
}

\DeclareOption{indigo}{
  \def\@indigo{indigo}
}
\DeclareOption{orange}{
  \def\@orange{orange}
}

\DeclareOption{monochrome}{
  \def\@monochrome{monochrome}
}

\DeclareOption{localFont}{
  \def\@local{local}
}

\DeclareOption{alternative}{
  \def\@alternative{alternate}
}

\DeclareOption{showLinks}{ \@showLinkstrue}

\ProcessOptions

% Dependences
%A Few Useful Packages
\RequirePackage[english,french]{babel}
\RequirePackage[utf8]{luainputenc}
\RequirePackage{fontspec} 					                 % for loading fonts
\RequirePackage{url,parskip} 	    % other packages for formatting
\RequirePackage[usenames,dvipsnames]{xcolor}
\RequirePackage{fullpage}
\RequirePackage[left=1cm,right=1cm,top=1.5cm,bottom=1.5cm]{geometry}
\RequirePackage{fontawesome}
%\RequirePackage{fontawesome6}
\RequirePackage{hyperref}
\RequirePackage{titlesec}
\RequirePackage{array}
\RequirePackage{enumitem}
\RequirePackage{longtable} 	
\RequirePackage{etoolbox}
\RequirePackage{tikz}
\RequirePackage[skins]{tcolorbox}
\RequirePackage{fancyhdr}
\RequirePackage{academicons}
\RequirePackage{svg}
\RequirePackage{multirow}
\RequirePackage{tikz}
\usetikzlibrary{calc}
\newcommand*\circled[1]{\tikz[baseline=(char.base)]{
    \node[shape=circle, draw, inner sep=1pt, 
        minimum height={\f@size*1.6},] (char) {\vphantom{WAH1g}#1};}}
%\RequirePackage{sourcesanspro}
\newcommand\blfootnote[1]{%
  \begingroup
  \renewcommand\thefootnote{}\footnote{#1}%
  \addtocounter{footnote}{-1}%
  \endgroup
}

\DeclareUnicodeCharacter{00E9}{\'{e}}
% Define default accent colors
%\definecolor{basecolor}{HTML}{0057e7}       %BLUE
%\definecolor{basecolor}{rgb}{0.54,0.08,0.22} %Qatar
%\definecolor{basecolor}{rgb}{0,0.34,0.72} %Khalifa university
%\definecolor{maroon}{rgb}{138,21,56}
\definecolor{basecolor}{RGB}{0,156,222}
\definecolor{gold}{rgb}{0.64,0.54,0.29}

\ifundef{\@green} {
  \ifundef{\@red} {
    \ifundef{\@indigo}{
      \ifundef{\@orange} {
        \ifundef{\@monochrome} {}
        { \definecolor{basecolor}{HTML}{000000}}
      }
      { \definecolor{basecolor}{HTML}{e68a00} }
    }
    { \definecolor{basecolor}{rgb}{0.2, 0.07, 0.48} }
  }
  { \definecolor{basecolor}{HTML}{b30000} }     %RED
}
{ \definecolor{basecolor}{rgb}{0.0, 0.62, 0.38} }

\definecolor{darkGrey}{HTML}{989898}

\colorlet{linkcolor}{basecolor}
\colorlet{accentcolor}{linkcolor!90}
\colorlet{symbolcolor}{linkcolor!85}

% Setup hyperref package, and colours for links
%\definecolor{linkcolour}{rgb}{0,0.2,0.6}

\if@showLinks
  \hypersetup{%
    breaklinks
  }%
\else
  \hypersetup{%
    pdfborder = {0 0 0},
    breaklinks
  }%
\fi

% Setup fancyhdr package
\fancyhf{}
\fancyhfoffset{0em}
% Remove head rule
\renewcommand{\headrulewidth}{0pt}
%\fancyfoot[C]{\thepage}
\pagestyle{fancy}

%\pagestyle{empty}                         % non-numbered pages
%\font\fb=''[cmr10]''                      % for use with \LaTeX command

% Setup CV sections
\titleformat{\section}{\Large\raggedright}{}{0em}{}[\titlerule]
\titlespacing{\section}{0pt}{2pt}{2pt}

% Configure list
\setlist[itemize,1]{label=\faAngleRight, nosep, leftmargin=2em} 
\setlist[itemize,2]{label=\faAngleRight, nosep, leftmargin=1.5em} 

% Setup Array : new column type
\newcolumntype{R}[1]{>{\hfill}m{#1}}

%Italian hyphenation for the word: ''corporations''
\hyphenation{im-pre-se}

% Setup fonts
\defaultfontfeatures{Mapping=tex-text}
%

% Define font to use according to localFont option
\ifundef{\@local}
{
  %\setmainfont[BoldFont = Helvetica Neue, ItalicFont=Helvetica Neue Thin Italic ,SmallCapsFont = Helvetica Neue Light]{Helvetica Neue Thin}
  \setmainfont{Source Sans Pro Light}[
    BoldFont = SourceSansPro-Regular, 
    ItalicFont= Source Sans Pro Light Italic]
}
{
  \setmainfont{SourceSansPro-Light}[
    Path = fonts/, 
    BoldFont = SourceSansPro-Regular, 
    ItalicFont = SourceSansPro-LightIt]
}

%New length definition
\newlength{\rightcolumnlength}
\setlength{\rightcolumnlength}{14.0cm}

\newlength{\semirightcolumnlength}
\setlength{\semirightcolumnlength}{2.0cm}

\newlength{\leftcolumn}
\setlength{\leftcolumn}{3.3cm}

% Font Awesome icons aliases


\newcommand\link[2]{\color{linkcolor}\href{#1}{#2}\color{Black} }
\newcommand\important[1]{\textbf #1}

% Create a tag
% Usage: \cvtag{<tag label>}
\newcommand{\cvtag}[1]{%
  \tikz[baseline]\node[anchor=base,draw=darkGrey!70,rounded corners=0.5ex,inner xsep=1ex,inner ysep =0.55ex,text height=1.3ex,text depth=.25ex]{#1};
}

% Render author's name
% Usage: \user{<firstanme>}{<lastname>}
\newcommand\user[2]{\color{accentcolor}{\LARGE #1 \textsc{\textbf{#2}}}\color{Black}}

% Render a text with its symbol
% Usage; \socialtext{<icon>}{<label>}
\newcommand{\socialtext}[2]{\mbox{\textcolor{symbolcolor}{#1}\hspace{0.5em}#2\hspace{1em}}}

% Render a link with its symbol
% Usage; \sociallink{<icon>}{<label>}
\newcommand{\sociallink}[3]{\mbox{\textcolor{symbolcolor}{#1}\hspace{0.5em}\link{#2}{#3}\hspace{1em}}}

% Define author's name
% Usage: \name{<firstname>}{<lastname>}
% Usage: \firstname{<firstname>}
% Usage: \lastname{<lastname>}
% Usage: \familyname{<familyname>}
\newcommand*{\name}[2]{\def\@firstname{#1}\def\@lastname{#2}}
\newcommand*{\firstname}[1]{\def\@firstname{#1}}
\newcommand*{\lastname}[1]{\def\@lastname{#1}}
\newcommand*{\familyname}[1]{\def\@lastname{#1}}
\def\@familyname{\@lastname}

% Define author's tagline
% Usage: \tagline{<tag line>}
\newcommand*{\tagline}[1]{\def\@tagline{#1}}

% Define author's photo
% Usage \photo{<diameter>}{<photo>}
\newcommand{\photo}[2]{\def\@photo{#2}\def\@photodiameter{#1}}

% Render author's address
% Usage: \address{<address>}
\newcommand*{\address}[1]{{\color{basecolor}\faMapO}{\hspace*{.5em}#1\hspace*{.5em}}}

% Render author's infos
% Usage: \infos{<infos>}
\newcommand*{\infos}[1]{{\color{basecolor}\faInfo}{\hspace*{.5em}#1}\hspace*{.5em}}

% Render author's linked-in (optional)
% Usage: \linkedin{<linked-in-nick>}
\newcommand*{\linkedin}{\sociallink{\faLinkedin}{https://www.linkedin.com/in/mohamed-amine-bayar-51166a94/}{Linkedin profile}}


% Render author's email (optional)
% Usage: \email{<email adress>}
\newcommand*{\email}[1]{\sociallink{\faEnvelopeO}{mailto:#1}{e-mail contact}}

% Render a website link (optional)
% Usage: \email{<email adress>}
\newcommand*{\pubmed}[2]{\sociallink{\includegraphics[height=12pt, keepaspectratio]{pubmed.png}}{#1}{#2}}

\newcommand*{\patent}[2]{\sociallink{}{#1}{#2}}

% Render a google scholar profile (optional)
% Usage: \email{<email adress>}
\newcommand*{\googlescholar}[1]{\sociallink{\aiGoogleScholar}{http://scholar.google.fr/#1}{List of publications}}
% Render author's mobile phone (optional)
% Usage: \smartphone{<mobile phone number>}
\newcommand*\smartphone[1]{{\color{basecolor}\faPhone}{\hspace*{.5em}#1\hspace*{.5em}}}    

% Render author's tagline
\newcommand\resumetitle[1]{
  \ifundef{\@alternative}{
	 \par{
	 	 \bigskip\center{\Large \color{accentcolor}\textbf{#1}\color{Black}}\par
	 }
	 \bigskip
  }{
    \color{accentcolor}\textbf{\large{#1}}\color{black}
  }
}

\newcommand\idphoto{
  \tikz\path[fill overzoom image={\@photo}]circle[radius=0.5\linewidth];
}

% Define social entries to print in header
\newcommand{\socialinfo}[1]{\def\@socialinfo{#1}}

% Render CV header
% Needs \@firstname, \@lastname and \@tagline to be defined
\newcommand*{\makecvheader}{
  \ifundef{\@alternative}{
    \ifundef{\@photodiameter}{
      \begin{minipage}{\linewidth}
    }{
      \begin{minipage}{\dimexpr\linewidth-\@photodiameter-2em}
    }
    \color{accentcolor}\user{\@firstname}{\@lastname}\color{black}\\
    \small{\@socialinfo}
    \end{minipage}
    \ifdef{\@photodiameter}{
      \begin{minipage}{\@photodiameter}
        \idphoto
      \end{minipage}
    }{}
    \resumetitle{\@tagline}
  }{
    \ifundef{\@photodiameter}{
      \begin{minipage}{\linewidth}
    }{
      \begin{minipage}{\dimexpr\linewidth-\@photodiameter-2em}
    }
    \user{\@firstname}{\@lastname}%\\
    \hspace*{1em}\resumetitle{\@tagline}
    \smallskip\\
    \small{\@socialinfo}
    \end{minipage}
    \ifdef{\@photodiameter}{
      \begin{minipage}{\@photodiameter}
        \idphoto
      \end{minipage}
    }{}
    \medskip
  }
}

% Define a footer for CV
% Usage: \makecvfooter{<left>}{<center>}{<right>}
\newcommand*{\makecvfooter}[3]{%
  \fancyfoot{}
  \fancyfoot[L]{#1}
  \fancyfoot[C]{#2}
  \fancyfoot[R]{#3}
}

% Resume part title definition
\newcommand\sectionTitle[2]{\section{\texorpdfstring{\color{accentcolor}#2\enspace \textsc{#1}}{#1}}}

% Define the 'keywords' environment
\newenvironment{keywords}{%
  \renewcommand{\arraystretch}{1.1}

  \begin{tabular}{>{}r>{}p{13cm}} 
}{%
  \end{tabular}
}

% Render a scholarshipentry in the scolarship environment
% Usage: \scholarshipentry{<date>}{<description>}
\newcommand\keywordsentry[2]{
  \textbf{#1} &   #2\\ 
}

% Define a new column type for the scholarship environment
\newcolumntype{Y}{>{\raggedleft}p{\leftcolumn}}

% Define the 'scholarship' environment
\newenvironment{scholarship}{%
  \begin{tabular}{Y p{\rightcolumnlength}}
}{%
  \end{tabular}
}

% Render a scholarshipentry in the scolarship environment
% Usage: \scholarshipentry{<date>}{<description>}
\newcommand\scholarshipentry[2]{
  #1    &  #2 \\
}

% Define the 'skills' environment
\newenvironment{skills}{%
  \begin{longtable}{R{\leftcolumn}p{\rightcolumnlength}}
}{%
  \end{longtable}
}

% Render a skill in the skills environment
% Usage: \skill{<skill>}{<level>}
\newcommand\skill[2]{
  \textbf{#1}    & \foreach \x in {1,...,5}{{\color{accentcolor!80} \ifnumgreater{\x}{#2}{\faStarO}{\faStar}}\enspace } \\
}

\newcommand\skilll[1]{
\textbf{#1}    & {\color{accentcolor!80}{\faStar}\enspace{\faStar}\enspace{\faStar}\enspace{\faStar}\enspace{\faStarHalfFull}}\enspace  \\
}



\newcommand\skillbis[2]{
\textbf{#1}   & \textbf{#2}\enspace  \\
}

\newenvironment{skillls}{%
  \begin{longtable}{R{\leftcolumn}p{\semirightcolumnlength}p{\semirightcolumnlength}}
}{%
  \end{longtable}
}

\newcommand\skilln[3]{
#1  & \textbf{#2} & \textbf{#3}\enspace  \\
}

\newcolumntype{E}{>{\raggedright\arraybackslash}p{\rightcolumnlength}}

% Define the 'experiences' environment
\newenvironment{experiences}{%
  \begin{longtable}{R{\leftcolumn}|E}
}{%
  \end{longtable}
}

% Define the 'experiences' environment
\newenvironment{referencess}{%
  \begin{table}[]
  \begin{tabular}{R{\leftcolumn}|E}
}{%
 \end{tabular}
 \end{table}
}

% Render an experience in the experiences environment
% Usage: 
% \experience
%  {<End date>}      {<Title>}{<Enterprise>}{<Country>}
%  {<Start date}     {
%                      <Experience description (Could be a list)>
%                    }
%                    {<Technology list>}
\newcommand\experience[7]{
  \textbf{#1}    & \textbf{#2, \textsc{#3}, #4}   								\\*
  \textbf{#5}    & \begin{minipage}[t]{\rightcolumnlength}
  					         #6
                   \end{minipage}										\\*
                 & \footnotesize{\foreach \n in {#7}{\cvtag{\n}}} 	\\
  }
  
\newcommand\imageexperience[8]{
\textbf{#1}                     & \textbf{#3, \textsc{#4}, #5}                                \\
\textbf{#2}                     & 	\textit{#6}				                                   \\
\begin{center} #8  \end{center} & \begin{minipage}[t] {\rightcolumnlength} #7 \end{minipage}	\\ 
}

\newcommand\imagereferee[9]{
\multirow{3}{*}{#1}& \textbf{#2}  \\
                   & #3  \\
                   & #4  \\
                   & #5  \\
                   & \textit{#9}  \\
 			      & \color{basecolor}{\faEnvelopeO} \color{basecolor}{\href{mailto:#6}{#6}}  \hspace*{2em}  \color{basecolor}{\faEye} \color{basecolor}{\href{#7}{#8}} \\
}

\newcommand\certification[4]{
\textbf{#1}    & \textbf{#2, #3} \\
    & #4  \\ 
}



%\newcommand\imagereferee[8]{
%\multirow{6}{*}{\begin{center} #8 \end{center}} &  \textbf{#1, \textsc{#2}, #3}\\
%                  &  \textit{#4}\\
%                  &  \textit{#5}\\
%                  &  \textit{#6}\\
%                  &  \textit{#7}
%                  }

% Render a consultant experience in the experiences environment
% Usage: 
% \consultantexperience
%  {<End date>}      {<Consultant title>}{<Consulting Enterprise>}{<Country>}
%  {<Start date}     {<Client title>}{<Client business unit>}
%                    {
%                      <Experience description (Could be a list)>
%                    }
%                    {<Technology list>}
\newcommand\consultantexperience[9]{
  \textbf{#1}    & \textbf{#2, \textsc{#3}, #4}   								\\*
  \textbf{#5}    & \emph{#6} pour \textsc{#7}                       				\\*
  				       & 	\begin{minipage}[t]{\rightcolumnlength}
  						        #8
                   	\end{minipage}										\\*
                 & \footnotesize{\foreach \n in {#9}{\cvtag{\n}}} 	\\
  }

\newcommand\emptySeparator{\multicolumn{2}{c}{}\\}


% Define \cvdoublecolumn, which sets its arguments in two columns without any labels



% usage: \cvreference{name}{address line 1}{address line 2}{address line 3}{address line 4}{e-mail address}{phone number}
% Everything but the name is optional
% If \addresssymbol, \emailsymbol or \phonesymbol are specified, they will be used.
% (Per default, \addresssymbol isn't specified, the other two are specified.)
% If you don't like the symbols, remove them from the following code, including the tilde ~ (space).

\newcommand{\cvreference}[7]{%
    \textbf{#1}\newline% Name
    \ifthenelse{\equal{#2}{}}{}{\addresssymbol~#2\newline}%
    \ifthenelse{\equal{#3}{}}{}{#3\newline}%
    \ifthenelse{\equal{#4}{}}{}{#4\newline}%
    \ifthenelse{\equal{#5}{}}{}{#5\newline}%
    \ifthenelse{\equal{#6}{}}{}{\emailsymbol~\texttt{#6}\newline}%
    \ifthenelse{\equal{#7}{}}{}{\phonesymbol~#7}}
    
    
% Define the 'projects' environment
\newenvironment{projects}{%
  \begin{longtable}{l}
}{%
  \end{longtable}
}

% Define the 'project' entry in the 'projects' environment
% Usage:
% \project
%   {<Project name>}{<dates>}
%   {<link1> <link2>}
%   {<Project description>}
%   {<techno1>,<techno2>}
\newcommand\project[5]{
  \begin{minipage}[t]{\dimexpr(\linewidth) - 1.5em}
    \textbf{\textsc{#1}} \hfill \textsc{#2}\smallskip\\
    \textit{#3}, #4\smallskip\\
    \footnotesize{\foreach \n in {#5}{\cvtag{\n}}}\\
  \end{minipage}
  \\*
}

\newcommand\projectt[5]{
  \begin{minipage}[t]{\dimexpr(\linewidth) - 1.5em}
    \textbf{\textsc{#1}} \hfill \textsc{#2}\smallskip\\
    \textit{#3} #4\smallskip\\
    \footnotesize{\foreach \n in {#5}{\cvtag{\n}}}\\
  \end{minipage}
  \\*
}

\newcommand\paper[4]{
  \begin{minipage}[t]{\dimexpr(\linewidth) - 1.5em}
    \textbf{\textsc{#1}} \hfill \textsc{#2}\\
    \textsc{#3}, \textit{#4}\\[-.7em]
  \end{minipage}
  \\*
}


\newcommand*\twocolumnsection[2]{
  \begin{minipage}[t]{\dimexpr(2\linewidth/5)- 1.5em}
    #1
  \end{minipage}
  \hfill
  \begin{minipage}[t]{\dimexpr(3\linewidth/5)- 1.5em}
    #2
  \end{minipage}
  }

% Define the 'referencees' environment
\newenvironment{referees}{%
}{%
  \hfill
  \bigskip
}

\newcommand*\referee[7]{
  \hspace{1em}
  \begin{minipage}[t]{\dimexpr(\linewidth/2) - 3em}
    \begin{tabular}{>{}l >{}l}
      \multicolumn{2}{l}{\textbf{#1}}\\
      \multicolumn{2}{l}{\emph{#2}, \textsc{#3}}\\
      \quad \color{basecolor}{\faEnvelopeO} & \color{basecolor}{\href{mailto:#4}{#4}} \\ 
      \quad \color{basecolor}{\faChrome} & \color{basecolor}{\href{#5}{#6}}\\  
      \multicolumn{2}{c}{#7}\\ \\
    \end{tabular}
  \end{minipage}%
}

\newcommand*\refereee[9]{
  \hspace{1em}
  \begin{minipage}[t]{\dimexpr(\linewidth/2) - 3em}
    \begin{tabular}{>{}l >{}l}
      \multicolumn{2}{l}{\textbf{#1}}\\
      \multicolumn{2}{l}{\emph{#2} \textsc{#3}}\\
      \multicolumn{2}{l}{\emph{#4} \textsc{#5}}\\
      \quad \color{basecolor}{\faEnvelopeO} & \color{basecolor}{\href{mailto:#6}{#6}} \\ 
      \quad \color{basecolor}{\faChrome} & \color{basecolor}{\href{#7}{#8}}\\  
      \multicolumn{2}{c}{#9}\\ \\
    \end{tabular}
  \end{minipage}%
}

