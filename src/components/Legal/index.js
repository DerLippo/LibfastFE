import React from 'react';
import { useParams, Link } from 'react-router-dom';
//Functions
import UserFunctions from '../UserFunctions';
//Components
import GetText from '../GetText';
import Header from '../Header';
import Footer from '../Footer';
// Styles
import { Wrapper as LegalWrapper } from './Legal.styles';
import Wrapper from '../Wrapper';

const Legal = () => {

    const {
        legalName
    } = useParams();

    return (
        <>
            {
                (legalName === 'about') ? (
                    <>
                    <Header userName={UserFunctions.getUserName()} />
                    <Wrapper>
                        <LegalWrapper>
                            <h1>Impressum</h1>
                            <h2>Angaben gemäß § 5 TMG:</h2>
                            <br/>
                            <h3>Libfast</h3>
                            <p>Philipp Oswald
                            <br/>Landsberger Allee 143
                            <br/>10369 Berlin
                            <br/>
                            <br/>
                            E-Mail: webmaster(at)libfast.com
                            </p>
                            <hr/>
                            <h3>Haftung für Inhalte</h3>
                            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                            <br/>
                            <h3>Haftung für Links</h3>
                            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                            <br/>
                            <h3>Urheberrecht</h3>
                            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                        </LegalWrapper>
                    </Wrapper>
                    <Footer />
                </>
                )
                :
                (
                    (legalName === 'terms') ? (
                        <>
                            <Header userName={UserFunctions.getUserName()} />
                            <Wrapper>
                                <LegalWrapper>
                                    <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
                                    <br/>
                                    <h2>Herzlich willkommen bei Libfast!</h2>
                                    <br/>
                                    <p>Diese Allgemeinen Geschäftsbedingungen enthalten die Regeln und Bestimmungen für die Nutzung von Libfast's Website unter <Link to='/'>https://libfast.com</Link>.</p>
                                    <br/>
                                    <p>Wir gehen davon aus, dass Sie bei Zugriff auf die Website die Allgemeinen Geschäftsbedingungen in vollem Umfang akzeptieren. Bitte fahren Sie mit der Nutzung von Libfast nicht fort, sofern Sie nicht mit allen auf dieser Seite aufgeführten Bedingungen einverstanden sind.</p>
                                    <br/>
                                    <p>Cookies:</p>
                                    <br/>
                                    <p>Die Website verwendet Cookies, um Ihr Online-Erlebnis zu personalisieren. Durch weiteren Zugriff auf Libfast stimmen Sie der Verwendung von Cookies zu.</p>
                                    <br/>
                                    <p>Ein Cookie ist eine Textdatei, die von einem Webserver auf Ihrer Festplatte gespeichert wird. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie enthalten einen eindeutigen Identifikator und können nur von dem Webserver der Domain gelesen werden, die das Cookie bei Ihnen gespeichert hat.</p>
                                    <br/>
                                    <p>Wir verwenden Cookies zu unterschiedlichen Zwecken, unter anderem zur Analyse und für personalisierte Marketing-Mitteilungen mit dem Ziel, die Benutzerfreundlichkeit unserer Website zu verbessern. Sie haben die Möglichkeit, optionale Cookies abzulehnen. Einige Cookies sind jedoch für das einwandfreie und ordnungsgemäße Funktionieren unserer Website unbedingt notwendig. Solche technisch notwendigen Cookies müssen immer aktiviert werden und erfordern daher keiner Einwilligung. Beachten Sie bitte, dass Sie durch das Akzeptieren der erforderlichen Cookies auch Cookies von Drittanbietern akzeptieren, sofern Sie von Drittanbietern auf unserer Website bereitgestellte Dienste wie z. B. ein integriertes Videoanzeigefenster nutzen.</p>
                                    <br/>
                                    <p>Lizenz:</p>
                                    <br/>
                                    <p>Sofern nicht anderweitig angegeben haben Libfast und/oder seine Lizenzgeber die geistigen Eigentumsrechte für alle Materialien auf Libfast. Alle Rechte am geistigen Eigentum sind vorbehalten. Sie können Seiten von Libfast für Ihren eigenen persönlichen Gebrauch ansehen und/oder ausdrucken, vorbehaltlich der in diesen Allgemeinen Geschäftsbedingungen festgelegten Einschränkungen.</p>
                                    <br/>
                                    <p>Folgendes ist untersagt:</p>
                                    <br/>
                                    <p>Veröffentlichung des Materials von Libfast</p>
                                    <p>Verkauf, Vermietung oder Unterlizenzierung des Materials von Libfast</p>
                                    <p>Reproduktion, Vervielfältigung oder Kopie des Materials von Libfast</p>
                                    <p>Weiterverbreitung der Inhalte von Libfast</p>
                                    <br/>
                                    <p>Diese Vereinbarung tritt mit dem heutigen Datum in Kraft.</p>
                                    <br/>
                                    <p>In gewissen Bereichen dieser Website haben Nutzer die Möglichkeit, Kommentare zu Zwecken des Meinungs- und Informationsaustausches zu hinterlassen. Entsprechende Nutzerkommentare werden vor ihrer Veröffentlichung auf der Website von Libfast nicht überprüft, gefiltert, bearbeitet oder verbreitet. Nutzerkommentare spiegeln ausschließlich die persönliche Meinung des jeweiligen Verfassers wider und entsprechen nicht den Ansichten und Überzeugungen von Libfast, den rechtlichen Vertretern und/oder Vertriebspartnern. Sofern rechtlich nicht anders geregelt, übernimmt Libfast keinerlei Haftung für Nutzerkommentare oder sich eventuell infolge der Erscheinung entsprechender Nutzerkommentare auf der Website ergebende Schadensansprüche und/oder Kosten.</p>
                                    <br/>
                                    <p>Libfast behält sich das Recht vor, alle Kommentare zu überprüfen und eventuell zu entfernen, wenn jene als unangemessen, anstößig oder als Verstoß gegen die Allgemeinen Geschäftsbedingungen betrachtet werden können.</p>
                                    <br/>
                                    <p>Hiermit versichern Sie uns und stimmen zu, dass:</p>
                                    <br/>
                                    <p>Sie über die notwendige Berechtigung, eventuell erforderliche Lizenzen und Einwilligungen verfügen, Kommentare auf unserer Website zu veröffentlichen;</p>
                                    <p>Ihre Kommentare keine Rechte an geistigem Eigentum oder anderweitige Eigentumsrechte wie Urheberrechte, Patente oder Markenrechte Dritter verletzen;</p>
                                    <p>Ihre Kommentare kein beleidigendes, verleumderisches, anstößiges, unangemessenes oder anderweitig rechtswidriges Material enthalten, welches eine Verletzung der Privatsphäre darstellt;</p>
                                    <p>Ihre Kommentare nicht dem Zweck dienen, geschäftliche, kundenorientierte, kommerzielle Aktivitäten oder rechtswidrige Handlungen zu bewerben oder zu fördern;</p>
                                    <br/>
                                    <p>Sie gewähren Libfast hiermit eine nicht-exklusive Lizenz zur Nutzung, Reproduktion, Bearbeitung und Autorisierung anderer zur Nutzung, Reproduktion und Bearbeitung Ihrer Kommentare in allen Formen, Formaten oder Medien.</p>
                                    <br/>
                                    <p>Verlinken unserer Inhalte:</p>
                                    <br/>
                                    <p>Folgende Institutionen dürfen ohne vorherige schriftliche Zustimmung einen Link auf unsere Website erstellen:</p>
                                    <br/>
                                    <p>Regierungsbehörden;</p>
                                    <p>Suchmaschinen;</p>
                                    <p>Nachrichtenagenturen;</p>
                                    <p>Online-Verzeichnisse dürfen in ihrer Auflistung einen den anderen dort gelisteten Unternehmen entsprechenden Link zu unserer Website erstellen.</p>
                                    <p>Akkreditierte Unternehmen. Ausgenommen sind werbende gemeinnützige Organisationen, Shops von Wohltätigkeitsorganisationen und Spendenorganisationen, die Geld für wohltätige Zwecke sammeln. Diese dürfen nicht auf unsere Website verlinken.</p>
                                    <br/>
                                    <p>Diese Organisationen dürfen eine Verlinkung zu unserer Startseite, unseren Publikationen oder anderen Informationen der Website erstellen, sofern die Verlinkung: (a) in keiner Weise irreführend ist; (b) nicht irrtümlicherweise Förderung, Unterstützung oder Zustimmung in Bezug auf die verlinkenden Partei oder ihre Produkte und/oder Dienstleistungen andeutet; und (c) in den Kontext der zu verlinkenden Website passt.</p>
                                    <br/>
                                    <p>Linkanfragen folgender Arten von Organisation können in Betracht gezogen und genehmigt werden:</p>
                                    <br/>
                                    <p>allgemein bekannte Verbraucher- und/oder Geschäftsinformationsquellen;</p>
                                    <p>dot.com Community-Websites;</p>
                                    <p>Verbände oder andere Einrichtungen, die Wohltätigkeitsorganisationen vertreten;</p>
                                    <p>Online-Verzeichnisse;</p>
                                    <p>Internetportale;</p>
                                    <p>Wirtschaftsprüfungs-, Rechts- und Beratungsunternehmen und</p>
                                    <p>Bildungsinstitute und Handelsverbände.</p>
                                    <br/>
                                    <p>Wir werden Linkanfragen von solchen Organisationen genehmigen, sofern: (a) der Link keine negativen Auswirkungen für uns oder unsere akkreditierten Unternehmen hat; (b) es in der Vergangenheit zu keinem Zeitpunkt zu Unstimmigkeiten mit der Organisation kam; (c) die Vorteile der Sichtbarkeit des Links trotz fehlender Nennung von Libfast überwiegen und (d) der Link im Kontext allgemeiner Ressourceninformationen steht.</p>
                                    <br/>
                                    <p>Diese Organisationen dürfen eine Verlinkung zu unserer Startseite erstellen, sofern die Verlinkung: (a) in keiner Weise irreführend ist; (b) nicht irrtümlicherweise Förderung, Unterstützung oder Zustimmung in Bezug auf die verlinkenden Partei oder ihre Produkte und/oder Dienstleistungen andeutet; und (c) in den Kontext der zu verlinkenden Website passt.</p>
                                    <br/>
                                    <p>Wenn Sie zu den in Punkt 2 gelisteten Organisationen gehören und an einer Verlinkung mit unserer Website interessiert sind, senden Sie uns bitte eine E-Mail an Libfast unter Angabe Ihres Namens, des Namens Ihrer Organisation, Ihrer Kontaktdaten, Ihrer Website-URL, der Liste aller URLs, von denen Sie auf unsere Website verlinken möchten sowie der Liste aller URLs auf unserer Website auf die Sie verlinken möchten. Wir werden uns bemühen, Ihnen innerhalb von 2 bis 3 Wochen zu antworten.</p>
                                    <br/>
                                    <p>Organisationen, die eine Genehmigung erhalten, dürfen unsere Website wie folgt verlinken:</p>
                                    <br/>
                                    <p>Unter Verwendung unseres Unternehmensnamens oder</p>
                                    <p>Unter Verwendung des Uniform Resource Locator (URL), mit dem verknüpft wird oder</p>
                                    <p>Unter Verwendung anderer Beschreibungen unserer Website oder der Materialien, auf die verlinkt wird auf eine Art, dass die Beschreibungen dem Kontext und Inhalt auf der verlinkten Website entsprechen.</p>
                                    <br/>
                                    <p>Ohne Lizenzvereinbarung zur Markennutzung dürfen weder das Logo von Libfast noch andere Grafikelemente zur Verlinkung verwendet werden.</p>
                                    <p>Haftung für Inhalte:</p>
                                    <br/>
                                    <p>Wir übernehmen keine Haftung für Inhalte, die auf Ihrer Website erscheinen. Sie erklären sich hiermit einverstanden, uns hinsichtlich aller auf Ihrer Website erhobenen Ansprüche schadlos zu halten. Auf keiner Website dürfen Links erscheinen, deren Inhalte als verleumderisch, obszön oder kriminell gewertet werden können oder gegen Rechte verstoßen, sie verletzen oder sonstige Verstöße und Verletzung von Rechten Dritter befürworten.</p>
                                    <br/>
                                    <p>Rechtsvorbehalt:</p>
                                    <br/>
                                    <p>Wir behalten uns das Recht vor, jederzeit und nach eigenem Ermessen zu verlangen, dass Sie alle Links oder einen bestimmten Link zu unserer Website entfernen. Sie erklären sich damit einverstanden, einer solchen Aufforderung umgehend nachzukommen und alle Links zu unserer Website unverzüglich zu entfernen. Wir behalten uns außerdem das Recht vor, die Allgemeinen Geschäftsbedingungen und die Verlinkungsrichtlinien jederzeit ändern zu können. Wenn Sie weiterhin auf unsere Website verlinken, stimmen Sie den Verlinkungsrichtlinien in diesen Allgemeinen Geschäftsbedingungen zu. Indem Sie weiterhin auf unsere Website verlinken, erklären Sie sich damit einverstanden, an diese Verlinkungsbedingungen gebunden zu sein und sie einzuhalten.</p>
                                    <p>Entfernung von Links von unserer Website:</p>
                                    <br/>
                                    <p>Bitte kontaktieren Sie uns jederzeit, wenn Sie einen Link auf unserer Website oder eine verlinkte Website aus irgendeinem Grund als unangemessen betrachten. Anfragen zur Link-Entfernung werden von uns geprüft, wir sind jedoch nicht verpflichtet, ihnen nachzukommen oder auf Anfragen direkt zu antworten.</p>
                                    <br/>
                                    <p>Wir übernehmen keine Garantie weder für die Vollständigkeit oder Richtigkeit der Informationen auf dieser Website, noch dass die Website verfügbar bleibt und das Material auf der Website auf dem neuesten Stand gehalten wird.</p>
                                    <br/>
                                    <p>Haftungsausschluss:</p>
                                    <br/>
                                    <p>Soweit dies nach geltendem Recht zulässig ist, schließen wir alle Zusicherungen, Gewährleistungen und Bedingungen im Zusammenhang mit unserer Website und der Nutzung dieser Website aus). Nichts in diesem Haftungsausschluss soll:</p>
                                    <br/>
                                    <p>unsere oder Ihre Haftung für Tod oder Körperverletzung infolge von Fahrlässigkeit einschränken oder ausschließen;</p>
                                    <p>unsere oder Ihre Haftung für Betrug oder betrügerische Falschdarstellung einschränken oder ausschließen;</p>
                                    <p>unsere oder Ihre Haftung in einer Weise beschränken, die nach geltendem Recht nicht zulässig ist oder</p>
                                    <p>irgendeine unserer oder Ihrer Haftungen ausschließen, die nach geltendem Recht nicht ausgeschlossen werden können.</p>
                                    <br/>
                                    <p>Die in diesem Abschnitt und an anderer Stelle in diesem Haftungsausschluss dargelegten Haftungsbeschränkungen und -ausschlüsse: (a) unterliegen dem vorhergehenden Absatz und (b) gelten für alle Haftungen, die sich aus dem Haftungsausschluss oder in Bezug auf den Gegenstand dieses Haftungsausschlusses ergeben, einschließlich Haftungen aus Vertrag, unerlaubter Handlung und aufgrund der Verletzung gesetzlicher Pflichten.</p>
                                    <br/>
                                    <p>Solange die Website und die Informationen und Dienstleistungen auf dieser Website kostenlos zur Verfügung gestellt werden, übernehmen wir keine Haftung für Verluste oder Schäden jeglicher Art.</p>
                                    </LegalWrapper>
                            </Wrapper>
                            <Footer />
                        </>
                    )
                    :
                    ( 
                        (legalName === 'privacy') ? (
                            <>
                                <Header userName={UserFunctions.getUserName()} />
                                <Wrapper>
                                    <LegalWrapper>
                                        <h1>Datenschutz&shy;erkl&auml;rung</h1>
                                        <h2>1. Datenschutz auf einen Blick</h2>
                                        <h3>Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
                                        <h3>Datenerfassung auf dieser Website</h3> <h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.</p> <h4>Wie erfassen wir Ihre Daten?</h4> <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4> <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4> <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p> <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
                                        <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3> <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p> <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>
                                        <h2>2. Hosting</h2>
                                        <h3>Strato</h3> <p>Wir hosten unsere Website bei Strato. Anbieter ist die Strato AG, Pascalstra&szlig;e 10, 10587 Berlin (nachfolgend: &bdquo;Strato&ldquo;). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.</p> <p>Weitere Informationen entnehmen Sie der Datenschutzerkl&auml;rung von Strato: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer">https://www.strato.de/datenschutz/</a>.</p> <p>Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                                        <h4>Auftragsverarbeitung</h4> <p>Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
                                        <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
                                        <h3>Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
                                        <br/>
                                        <h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>
                                        <br/>
                                        <p>Libfast<br />
                                        Philipp Oswald<br />
                                        Landsberger Allee 143<br />
                                        10369 Berlin</p>
                                        <br/>
                                        <p>E-Mail: webmaster(at)libfast.com</p>
                                        <p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>
                                        <br/>
                                        <h3>Speicherdauer</h3>
                                        <p>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.</p>
                                        <br/>
                                        <h3>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3> <p>Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, k&ouml;nnen Ihre personenbezogene Daten in diese Drittstaaten &uuml;bertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen L&auml;ndern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbeh&ouml;rden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen k&ouml;nnten. Es kann daher nicht ausgeschlossen werden, dass US-Beh&ouml;rden (z.&nbsp;B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu &Uuml;berwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungst&auml;tigkeiten keinen Einfluss.</p><h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
                                        <br/>
                                        <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                                        <br/>
                                        <h3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3> <p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                                        <br/>
                                        <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3> <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                                        <br/>
                                        <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3> <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
                                        <br/>
                                        <h3>Auskunft, L&ouml;schung und Berichtigung</h3> <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
                                        <br/>
                                        <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3> <p>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p> <ul> <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul> <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
                                        <br/>
                                        <h2>4. Datenerfassung auf dieser Website</h2>
                                        <br/>
                                        <h3>Cookies</h3> <p>Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen&nbsp;oder eine automatische L&ouml;schung durch Ihren Webbrowser erfolgt.</p> <p>Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren w&uuml;rden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.</p> <p>Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (funktionale Cookies, z.&nbsp;B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.</p> <p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p> <p>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren und ggf. eine Einwilligung abfragen.</p>
                                        <br/>
                                        <h3>Server-Log-Dateien</h3> <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:</p> <ul> <li>Browsertyp und Browserversion</li> <li>verwendetes Betriebssystem</li> <li>Referrer URL</li> <li>Hostname des zugreifenden Rechners</li> <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li> </ul> <p>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p> <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.</p>
                                        <br/>
                                        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3> <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p> <p>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>
                                        <br/>
                                        <h3>Kommentar&shy;funktion auf dieser Website</h3> <p>F&uuml;r die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gew&auml;hlte Nutzername gespeichert.</p>
                                        <br/>
                                        <h4>Speicherung der IP-Adresse</h4> <p>Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf dieser Website nicht vor der Freischaltung pr&uuml;fen, ben&ouml;tigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu k&ouml;nnen.</p>
                                        <br/>
                                        <h4>Abonnieren von Kommentaren</h4> <p>Als Nutzer der Seite k&ouml;nnen Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Best&auml;tigungsemail, um zu pr&uuml;fen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie k&ouml;nnen diese Funktion jederzeit &uuml;ber einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens von Kommentaren eingegebenen Daten werden in diesem Fall gel&ouml;scht; wenn Sie diese Daten f&uuml;r andere Zwecke und an anderer Stelle (z.&nbsp;B. Newsletterbestellung) an uns &uuml;bermittelt haben, verbleiben diese Daten jedoch bei uns.</p>
                                        <br/>
                                        <h4>Speicherdauer der Kommentare</h4> <p>Die Kommentare und die damit verbundenen Daten werden gespeichert und verbleiben auf dieser Website, bis der kommentierte Inhalt vollst&auml;ndig gel&ouml;scht wurde oder die Kommentare aus rechtlichen Gr&uuml;nden gel&ouml;scht werden m&uuml;ssen (z.&nbsp;B. beleidigende Kommentare).</p>
                                        <br/>
                                        <h4>Rechtsgrundlage</h4> <p>Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k&ouml;nnen eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bereits erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.</p>
                                        <br/>
                                        <h2>5. Plugins und Tools</h2>
                                        <br/>
                                        <h3>Google Web Fonts</h3> <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p> <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde (z.&nbsp;B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Wenn Ihr Browser Web Fonts nicht unterst&uuml;tzt, wird eine Standardschrift von Ihrem Computer genutzt.</p> <p>Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerkl&auml;rung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
                                        <br/>
                                        <h3>Font Awesome</h3> <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten und Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6 Porter Road Apartment 3R, Cambridge, Massachusetts, USA.</p> <p>Beim Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Fonts in ihren Browsercache, um Texte, Schriftarten und Symbole korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Font Awesome aufnehmen. Hierdurch erlangt Font Awesome Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde (z.&nbsp;B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Wenn Ihr Browser Font Awesome nicht unterst&uuml;tzt, wird eine Standardschrift von Ihrem Computer genutzt.</p> <p>Weitere Informationen zu Font Awesome finden Sie&nbsp;und in der Datenschutzerkl&auml;rung von Font Awesome unter: <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">https://fontawesome.com/privacy</a>.</p>
                                        <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
                                    </LegalWrapper>
                                </Wrapper>
                                <Footer />
                            </>
                        )
                        :null
                    )
                )
            }
        </>
    )
};

export default Legal;