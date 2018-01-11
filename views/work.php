<?php
    $work = json_decode(file_get_contents('./services/work.json'));
?>

<section class="work" name="work" id="work">
    <h2 class="cta">Work</h2>
    <?php
        foreach ($work as $key => $value) {
            $checked = $key == 'projects' ? "checked=\"true\"" : "";
            echo "<input id=\"$key\" value=\"$key\" type=\"radio\" name=\"workfilter\" $checked />";
        }
    ?>
    <div class="filter">
        <?php
            foreach ($work as $key => $value) {
                echo "<label for=\"$key\">",ucwords($key),"</label>";
            }
        ?>
    </div>
    <div class="stage">
        <?php
            foreach ($work as $key => $value) {
                echo "<div class=\"section $key\">";
                    for ($i=0; $i < sizeof($value); $i ++) {
                        $entry = $value[$i];
                        
                        if (property_exists($entry,'additionalLinks')) {
                            echo "<div class=\"entry additionalLinks\">";
                            echo "<a class=\"title\" href=\"$entry->link\" target=\"_blank\" rel=\"nofollow\">",$entry->title,"</a>";
                        } else if (property_exists($entry,'link')) {
                            echo "<a class=\"entry\" href=\"$entry->link\" target=\"_blank\" rel=\"nofollow\">";
                            echo "<span class=\"title\">",$entry->title,"</span>";
                        } else {
                            echo "<div class=\"entry\">";
                            echo "<span class=\"title\">",$entry->title,"</span>";
                        }

                        if (property_exists($entry,'subtitle')) {
                            echo "<span class=\"subtitle\">",$entry->subtitle,"</span>";
                        }
                        if (property_exists($entry,'subcategory')) {
                            echo "<span class=\"subcategory\">",$entry->subcategory,"</span>";
                        }
                        if (property_exists($entry,'date')) {
                            echo "<span class=\"date\">",$entry->date,"</span>";
                        }

                        if (property_exists($entry,'additionalLinks')) {
                            for ($ii=0; $ii < sizeof($entry->additionalLinks); $ii ++) {
                                $link = $entry->additionalLinks[$ii];
                                echo "<a class=\"additional\" href=\"$link[1]\" target=\"_blank\" rel=\"nofollow\">$link[0]</a>";
                            }
                        }

                        if (property_exists($entry,'additionalLinks') || !property_exists($entry,'link')) {
                            echo "</div>";
                        } else {
                            echo "</a>";
                        }
                    }
                echo "</div>";
            }
        ?>
    </div>
</section>